import NextAuth from "next-auth/next";
import GithubProvider from 'next-auth/providers/github'
import CredentialsProvider from "next-auth/providers/credentials";
import connectDB from '@/util/database'
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";

export const authOptions = {
    providers : [
        GithubProvider({
            clientId : '',
            clientSecret : '',
        }),
        CredentialsProvider({
            name : "credentials",
            credentials : {
                email : {label : 'email', type : 'text'},
                password : {label : 'password', type : 'password'}
            },
            async authorize(credentials) {
                let db = (await connectDB).db('watcha')
                let user = await db.collection('user_cred').findOne({email : credentials.email})
                if(!user) {
                    console.log('비밀번호 오류')
                    return null;
                }
                return user
            }
            
        })
    ],

    session : {
        strategy : 'jwt',
        maxAge : 30 * 24 * 60 * 60
    },

    callbacks : {
        jwt : async ({token, user}) => {
            if(user) {
                token.user = {};
                token.user.name = user.name
                token.user.email = user.email
            }
            return token;
        },
        session : async ({session , token}) => {
            session.user = token.user;
            return session;
        }
    },

    adapter : MongoDBAdapter(connectDB),
    secret : process.env.NEXTAUTH_SECRET
}


export default NextAuth(authOptions)