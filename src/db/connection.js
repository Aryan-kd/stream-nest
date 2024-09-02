import mongoose from "mongoose";
import dotenv from "dotenv";
import { DB_NAME } from "../constant.js";
dotenv.config();

const connectDB = async () => {
    try {
        let db = await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`);

        console.log(`MongoDB is Connect`);
    } catch (error) {
        console.error("Database not connected: ", error);
        process.exit(1);
    }
};

export default connectDB;
