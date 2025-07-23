// server.js
import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import connectDB from './configs/db.js';
import { clerkMiddleware } from '@clerk/express'
import clerkWebhooks from './controllers/clerkWebhooks.js';

const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use(clerkMiddleware())

// Routes
app.use("/api/clerk", clerkWebhooks);

app.get('/', (req, res) => {
  res.send('Api working');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
