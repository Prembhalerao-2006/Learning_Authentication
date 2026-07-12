import mongoose from 'mongoose';
import config from './config.js';

async function connectDB () {
    try {
        await mongoose.connect(config.MONGODB_URI);
        console.log("Connected to mongoDB");
        
    } catch (error) {
        console.error(" Failed to connect MongoDB");
    }
}
export default connectDB;