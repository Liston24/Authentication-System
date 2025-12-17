import mongoose from 'mongoose';

const connectDB=async()=>{
    try{

        await mongoose.connect(`${process.env.MONGO_URI}/authsystem`)
        console.log("MongoDB connected successfully");

    }catch(error){
         
        console.log('Connection Error',error);
    }
}

export default connectDB;