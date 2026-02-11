import CircuitBreaker from 'opossum';

/**
 * Circuit-breaker options per downstream service.
 *
 *   timeout        – how long to wait for a response before counting it as a failure
 *   errorThreshold – percentage of failures that triggers the breaker to OPEN
 *   resetTimeout   – how long (ms) the breaker stays OPEN before trying a probe request
 */
export interface BreakerOptions {
    timeout: number;
    errorThresholdPercentage: number;
    resetTimeout: number;
}

const DEFAULT_OPTIONS: BreakerOptions = {
    timeout: 10_000,               // 10 s
    errorThresholdPercentage: 50,   // open after 50 % failures
    resetTimeout: 30_000,           // try again after 30 s
};

/**
 * One circuit-breaker per downstream service name.
 */
const breakers = new Map<string, CircuitBreaker>();

/**
 * Returns (or creates) a circuit-breaker for the given service.
 *
 * The wrapped function is a no-op – we only use the breaker to
 * track the health of each service.  Call `breaker.fire()` before
 * proxying; if the circuit is open, it will reject immediately.
 *
 * After the proxy responds we call `breaker.emit('success')` or
 * `breaker.emit('failure')` manually from the proxy error handler.
 */
export function getBreaker(
    serviceName: string,
    opts: Partial<BreakerOptions> = {},
): CircuitBreaker {
    if (breakers.has(serviceName)) {
        return breakers.get(serviceName)!;
    }

    const merged = { ...DEFAULT_OPTIONS, ...opts };

    // The action is a passthrough – real proxying happens in http-proxy-middleware.
    // We wrap a simple resolved promise so opossum has something to call.
    const action = () => Promise.resolve();

    const breaker = new CircuitBreaker(action, {
        timeout: merged.timeout,
        errorThresholdPercentage: merged.errorThresholdPercentage,
        resetTimeout: merged.resetTimeout,
        volumeThreshold: 5, // need at least 5 requests before evaluating
    });

    breaker.on('open', () => {
        console.warn(`[circuit-breaker] Circuit OPEN for ${serviceName}`);
    });
    breaker.on('halfOpen', () => {
        console.info(`[circuit-breaker] Circuit HALF-OPEN for ${serviceName}`);
    });
    breaker.on('close', () => {
        console.info(`[circuit-breaker] Circuit CLOSED for ${serviceName}`);
    });

    breakers.set(serviceName, breaker);
    return breaker;
}

/**
 * Check whether a service's circuit is currently open (tripped).
 */
export function isCircuitOpen(serviceName: string): boolean {
    const breaker = breakers.get(serviceName);
    if (!breaker) return false;
    return breaker.opened;
}

/**
 * Manually record a success for the service's circuit breaker.
 */
export function recordSuccess(serviceName: string): void {
    const breaker = breakers.get(serviceName);
    if (breaker) breaker.emit('success');
}

/**
 * Manually record a failure for the service's circuit breaker.
 */
export function recordFailure(serviceName: string): void {
    const breaker = breakers.get(serviceName);
    if (breaker) breaker.emit('failure');
}
