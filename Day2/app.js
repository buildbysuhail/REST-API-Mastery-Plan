// App set up
import express from 'express';
import userRoutes from './routes/user.routes.js';

const app = express();

app.use(express.json());

app.get('/REST', (_, res) => {
    res.status(200).json({ message: 'Welcome to the User Management API' });
});

app.use('/users', userRoutes);

export default app;