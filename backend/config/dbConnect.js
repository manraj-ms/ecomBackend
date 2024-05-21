import mongoose from "mongoose"

export const connectDatabase = () =>{
    mongoose.connect(process.env.DB_LOCAL_URI).then((con)=>{
        console.log(`MongoDB running`)
    })
}