import { Kafka } from 'kafkajs';
import { config } from '@teledrive/shared-config';
import { KAFKA_TOPICS } from '@teledrive/shared-types';

let producer: Awaited<ReturnType<Kafka['producer']>> | null = null;

async function getProducer() {
    if (producer) return producer;
    const kafka = new Kafka({
        clientId: config.kafka.clientId,
        brokers: config.kafka.brokers,
    });
    producer = kafka.producer();
    await producer.connect();
    return producer;
}

export async function publishUserRegistered(user: { id: string; username?: string; firstName: string; createdAt: Date }) {
    try {
        const p = await getProducer();
        await p.send({
            topic: KAFKA_TOPICS.USER_REGISTERED,
            messages: [{ key: user.id, value: JSON.stringify({ userId: user.id, username: user.username, firstName: user.firstName, createdAt: user.createdAt }) }],
        });
    } catch (err) {
        console.error('Kafka publish user.registered failed:', err);
    }
}

export async function publishUserLoggedIn(userId: string, loggedAt: string) {
    try {
        const p = await getProducer();
        await p.send({
            topic: KAFKA_TOPICS.USER_LOGGED_IN,
            messages: [{ key: userId, value: JSON.stringify({ userId, loggedAt }) }],
        });
    } catch (err) {
        console.error('Kafka publish user.logged_in failed:', err);
    }
}
