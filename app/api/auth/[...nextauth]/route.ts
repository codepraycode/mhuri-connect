import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google';
import EmailProvider from 'next-auth/providers/email';
import { connectToDb, getClientPromise } from "@utils/database";
import Member from "@models/member";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import { EMAIL_FROM, EMAIL_SERVER_HOST, EMAIL_SERVER_PASSWORD, EMAIL_SERVER_PORT, EMAIL_SERVER_USER } from "@utils/env";


const authHandler = NextAuth({
    session: {
        strategy: 'jwt'
    },

    //The adapter to the database we will use to store the data
    adapter: MongoDBAdapter(getClientPromise()),

    //The providers are the autentication method
    providers: [
        EmailProvider({
            server: {
                host: EMAIL_SERVER_HOST,
                port: EMAIL_SERVER_PORT,
                auth: {
                    user: EMAIL_SERVER_USER,
                    pass: EMAIL_SERVER_PASSWORD,
                },
            },
            from: EMAIL_FROM,
            maxAge: 24 * 60 * 60,
        }),
    ]
})


export {
    authHandler as GET,
    authHandler as POST,
}