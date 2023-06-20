
const env = process.env;

const isProduction: boolean = env.NODE_ENV === 'production';

// Database
const MONGODB_URI = env.MONGODB_URI || "";
const DB_NAME = isProduction ? "oila_db" : "oila_test_db";


export {
    MONGODB_URI, DB_NAME
}