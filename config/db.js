import mongoose from 'mongoose';
import * as dotenv from 'dotenv'; 
dotenv.config();

function connectdb(){
    mongoose.connect(process.env.MONGO_CONNECTION_URL, {useNewUrlParser: true ,useUnifiedTopology: true});
    const connection=mongoose.connection;
    try{
        connection.once('open',()=>{
        console.log('Database connected👍.')
    })
    }
    catch(e){
        console.log("Connection Fails👎.")
    }
}

export default connectdb;