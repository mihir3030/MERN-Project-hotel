import express from 'express';
import "dotenv/config";
import cors from 'cors';
import connectDB from './configs/db.js';
import {clerkMiddleware} from '@clerk/express'
import clerkWebhooks from './controllers/clerkWebhooks.js';

const app = express();
connectDB();


// here we use cors to allow cross-origin requests
app.use(cors());

//clerk use - Middleware
app.use(clerkMiddleware)
app.use(express.json())   //all the request will pass to json


//API to use clerk webhhook
app.use("/api/clerk", clerkWebhooks);

app.get('/', (req, res) => {
    res.send("Api working")
})

  
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})