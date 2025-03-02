import mongoose from "mongoose";

export const ConnectDB = async () =>{
    if (!process.env.MONGODB_URI) {
        throw new Error('Please add your MONGODB_URI to .env file')
    }
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("DB Connected");
}