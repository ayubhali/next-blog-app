import mongoose from "mongoose";

export const ConnectDB = async () =>{
    await mongoose.connect('mongodb+srv://ayubhalidev:NCEcSGdvIIcBEQtf@cluster0.guj5s.mongodb.net/blog-app');
    console.log("DB Connected");
}