
const env = process.env;

const isProduction: boolean = env.NODE_ENV === 'production';

// Database
const MONGODB_URI = env.MONGODB_URI || "";
// const DB_NAME = isProduction ? "oila_db" : "oila_test_db";
const DB_NAME = "oila_test_db";

// NEXT Env
const NEXTAUTH_URL = env.NEXTAUTH_URL;
const NEXTAUTH_SECRET = env.NEXTAUTH_SECRET

// Email Env
const EMAIL_SERVER_USER= env.SMTP_USER
const EMAIL_SERVER_PASSWORD= env.SMTP_PASSWORD
const EMAIL_SERVER_HOST= env.SMTP_HOST
const EMAIL_SERVER_PORT= env.SMTP_PORT
const EMAIL_FROM= env.SMTP_FROM

export {
    isProduction,

    
    MONGODB_URI, DB_NAME,

    NEXTAUTH_URL, NEXTAUTH_SECRET,

    EMAIL_SERVER_USER, EMAIL_SERVER_PASSWORD,
    EMAIL_SERVER_HOST, EMAIL_SERVER_PORT,
    EMAIL_FROM,
}