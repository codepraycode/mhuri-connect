/*
    Database setup and connections with consumable hooks
*/

import mongoose from "mongoose";
import { MongoClient } from "mongodb";
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

export const getClientPromise = async (): Promise<MongoClient> => {
    
    if (!MONGODB_URI) {
        throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
    }

    let client;
    let clientPromise: Promise<MongoClient>;

    // In production mode, it's best to not use a global variable.
    client = new MongoClient(MONGODB_URI, {});
    clientPromise = client.connect();

    // Export a module-scoped MongoClient promise. By doing this in a
    // separate module, the client can be shared across functions.
    return clientPromise;
}