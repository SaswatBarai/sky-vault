import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import mongoose from 'mongoose';
import { config } from '@teledrive/shared-config';
import authRoutes from './routes/auth.routes';

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

// Health check
app.get('/health', (_req, res) => {
    res.status(200).json({
        status: 'ok',
        service: 'auth-service',
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
    });
});

app.use('/auth', authRoutes);

async function start() {
    try {
        await mongoose.connect(config.mongodb.uri, { dbName: config.mongodb.database });
        console.log('Auth service: MongoDB connected');

        const port = config.ports.authService;
        app.listen(port, () => {
            console.log(`Auth service listening on port ${port}`);
        });
    } catch (err) {
        console.error('Auth service failed to start:', err);
        process.exit(1);
    }
}

start();
