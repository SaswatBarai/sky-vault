import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import mongoose from 'mongoose';
import { config } from '@teledrive/shared-config';
import userRoutes from './routes/user.routes';

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/health', (_req, res) => {
    res.status(200).json({
        status: 'ok',
        service: 'user-service',
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
    });
});

app.use('/users', userRoutes);

async function start() {
    try {
        await mongoose.connect(config.mongodb.uri, { dbName: config.mongodb.database });
        console.log('User service: MongoDB connected');

        const port = config.ports.userService;
        app.listen(port, () => {
            console.log(`User service listening on port ${port}`);
        });
    } catch (err) {
        console.error('User service failed to start:', err);
        process.exit(1);
    }
}

start();
