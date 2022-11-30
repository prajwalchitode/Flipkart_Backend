import mongoose from "mongoose";



export const connection = async (URL) =>{

    try{
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database Connected Succesfully');
    }

    catch(error){
        console.log("Error while connecting the Database ", error.message);

    }
}

export default connection;

// , useFindAndModify: false