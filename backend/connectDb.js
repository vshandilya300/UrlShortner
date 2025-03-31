import { connect } from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const connectDb = async () => {
    try{
        await connect(process.env.MONGO_URI);
        console.log('Connected to MongoDB');
    }catch(err){
        console.error('Error connecting to MongoDB:', err);
        process.exit(1);
    }
};

export default connectDb;