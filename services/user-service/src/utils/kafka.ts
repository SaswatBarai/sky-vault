import { Kafka, Consumer, EachMessagePayload } from 'kafkajs';
import { config } from '@teledrive/shared-config';
import { KAFKA_TOPICS } from '@teledrive/shared-types';
import { UserService } from '../services/user.service';

const userService = new UserService();
let consumer: Consumer | null = null;

/**
 * Starts the Kafka consumer for user-service.
 * Subscribes to file.uploaded and file.deleted topics to update user storage quotas.
 */
export async function startKafkaConsumer(): Promise<void> {
    try {
        const kafka = new Kafka({
            clientId: `${config.kafka.clientId}-user-service`,
            brokers: config.kafka.brokers,
        });

        consumer = kafka.consumer({ groupId: 'user-service-group' });
        await consumer.connect();

        await consumer.subscribe({ topic: KAFKA_TOPICS.FILE_UPLOADED, fromBeginning: false });
        await consumer.subscribe({ topic: KAFKA_TOPICS.FILE_DELETED, fromBeginning: false });

        await consumer.run({
            eachMessage: async ({ topic, message }: EachMessagePayload) => {
                try {
                    if (!message.value) return;
                    const data = JSON.parse(message.value.toString());

                    switch (topic) {
                        case KAFKA_TOPICS.FILE_UPLOADED: {
                            // Payload expected: { userId: string, size: number, ... }
                            const { userId, size } = data;
                            if (userId && size) {
                                const result = await userService.addStorageUsed(userId, size);
                                if (result) {
                                    console.log(`[user-service] Storage updated for user ${userId}: ${result.used}/${result.total}`);
                                } else {
                                    console.warn(`[user-service] Failed to update storage for user ${userId} (quota exceeded or user not found)`);
                                }
                            }
                            break;
                        }
                        case KAFKA_TOPICS.FILE_DELETED: {
                            // Payload expected: { userId: string, size: number, ... }
                            const { userId, size } = data;
                            if (userId && size) {
                                const result = await userService.subtractStorageUsed(userId, size);
                                if (result) {
                                    console.log(`[user-service] Storage freed for user ${userId}: ${result.used}/${result.total}`);
                                }
                            }
                            break;
                        }
                        default:
                            console.log(`[user-service] Unhandled topic: ${topic}`);
                    }
                } catch (err) {
                    console.error(`[user-service] Error processing Kafka message on topic ${topic}:`, err);
                }
            },
        });

        console.log('[user-service] Kafka consumer started — listening for file.uploaded, file.deleted');
    } catch (err) {
        console.error('[user-service] Failed to start Kafka consumer:', err);
    }
}

export async function stopKafkaConsumer(): Promise<void> {
    if (consumer) {
        await consumer.disconnect();
        consumer = null;
    }
}
