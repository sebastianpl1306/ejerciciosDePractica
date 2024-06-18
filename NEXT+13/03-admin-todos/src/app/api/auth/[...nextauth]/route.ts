import { PrismaAdapter } from '@auth/prisma-adapter';
import { NextAuthOptions } from 'next-auth';
import { Adapter } from 'next-auth/adapters';
import NextAuth from 'next-auth/next';

import prisma from '@/lib/prisma';
import { signInEmailPassword } from '@/auth';

import GoogleProvider from 'next-auth/providers/google';
import GithubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter( prisma ) as Adapter,
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID ?? '',
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ''
        }),
        GithubProvider({
            clientId: process.env.GITHUB_ID ?? '',
            clientSecret: process.env.GITHUB_SECRET ?? ''
        }),
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: "Correo", type: "email", placeholder: "usuario@gmail.com" },
                password: { label: "Contraseña", type: "password", placeholder: '******' }
            },
            async authorize(credentials, req) {
                const user = await signInEmailPassword( credentials!.email, credentials!.password );

                if (user) {
                  return user
                }

                return null;
            }
        })
    ],
    session: {
        strategy: 'jwt'
    },
    callbacks: {
        async signIn({ user, account, profile, email, credentials }){
            return true;
        },
        async jwt({ token, user, account, profile }) {
            const dbUser = await prisma.user.findUnique({ where: { email: token.email ?? 'no-email' }});

            if ( dbUser?.isActive === false ){
                throw new Error('Usuario no esta activo');
            }

            token.roles = dbUser?.roles ?? ['no-roles'];
            token.id = dbUser?.id ?? 'no-uuid';

            return token;
        },
        async session({ session, token, user }) {

            if ( session && session.user ) {
                session.user.roles = token.roles;
                session.user.id = token.id;
            }

            return session;
        }
    }
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };