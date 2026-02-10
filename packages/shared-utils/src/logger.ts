export enum LogLevel {
    DEBUG = 'debug',
    INFO = 'info',
    WARN = 'warn',
    ERROR = 'error',
}

export class Logger {
    constructor(private serviceName: string) { }

    private log(level: LogLevel, message: string, meta?: any) {
        const timestamp = new Date().toISOString();
        const logEntry = {
            timestamp,
            level,
            service: this.serviceName,
            message,
            ...meta,
        };

        console.log(JSON.stringify(logEntry));
    }

    debug(message: string, meta?: any) {
        this.log(LogLevel.DEBUG, message, meta);
    }

    info(message: string, meta?: any) {
        this.log(LogLevel.INFO, message, meta);
    }

    warn(message: string, meta?: any) {
        this.log(LogLevel.WARN, message, meta);
    }

    error(message: string, error?: Error, meta?: any) {
        this.log(LogLevel.ERROR, message, {
            error: error?.message,
            stack: error?.stack,
            ...meta,
        });
    }
}
