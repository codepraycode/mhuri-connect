/*
    Database setup and connections with consumable hooks
*/

import mongoose from "mongoose";
import { MONGODB_URI, DB_NAME} from './env';

let isConnected: boolean = false;

export const connectToDb = async (): Promise<void> => {
    mongoose.set("strictQuery", true);


    if (isConnected) {
        console.log("MongoDb is already connected!");
        return;
    }


    try {
        // Try to connect
        await mongoose.connect(MONGODB_URI, {
            dbName: DB_NAME,
        });

        isConnected = true;
        console.log("MongoDb Connected!");
    }
    catch(err) {
        console.error("Error:>", err);
    }
}