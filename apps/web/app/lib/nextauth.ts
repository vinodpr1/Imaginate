import CredentialsProvider from "next-auth/providers/credentials";
import { prismaClient } from "@repo/db/prismaClient";
import Jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { JWT } from "next-auth/jwt";
import { Session } from "next-auth";

// interface token extends JWT {
//     uid: string;
//     jwtToken: string;
// }

export interface sessionT extends Session {
  user: {
    id: string;
    jwtToken: string;
    email: string;
    name: string;
  };
}

interface User {
  id: string;
  name: string;
  email: string;
  token: string;
}

const generateJWT = (id: { id: string }) => {
  return Jwt.sign(id, "vinodpr");
};

export const AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Email",
      credentials: {
        name: { label: "Name", type: "text", placeholder: "Enter Name" },
        email: { label: "Email", type: "email", placeholder: "Enter Email" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter Password",
        },
      },
      async authorize(credentials): Promise<any> {
        if (!credentials?.email || !credentials?.password) return null;

        const salt = bcrypt.genSaltSync(10);
        const hashPassword = bcrypt.hashSync(credentials?.password, salt);

        const user = {
          name: credentials?.name,
          email: credentials?.email,
          password: credentials?.password,
        };

        const isUser = await prismaClient.user.findFirst({
          where: { email: user.email },
          select: {
            email: true,
            password: true,
            id: true,
            name: true,
            profilePicture: true,
          },
        });

        // is user is present then try to signin
        if (isUser) {
          if (bcrypt.compareSync(user.password, isUser.password)) {
            const jwt = generateJWT({ id: isUser.id });
            return {
              id: isUser.id,
              name: isUser.name,
              email: isUser.email,
              profilepicture: isUser.profilePicture,
              token: jwt,
            };
          } else {
            return null;
          }
        }
        // is user is'n present then try to signup
        try {
          const newUser = await prismaClient.user.create({
            data: {
              name: user.name,
              email: user.email,
              password: hashPassword,
            },
          });
          const jwt = generateJWT({ id: newUser.id });
          return {
            id: newUser.id,
            name: newUser.name,
            email: newUser.email,
            profilepicture: newUser.profilePicture,
            token: jwt,
          };
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
  secret: process.env.NEXTAUTH_SECRET || "s3cret",
  callbacks: {
    async session({
      session,
      token,
    }: {
      session: Session;
      token: JWT;
    }): Promise<sessionT> {
      const newSession: sessionT = session as sessionT;
      if (newSession.user && token.uid) {
        newSession.user.id = token.uid as string;
        newSession.user.jwtToken = token.jwtToken as string; // Add the JWT token to the session
      }
      return newSession;
    },

    jwt: async ({ token, user }: any): Promise<JWT> => {
      const newToken = token;
      if (user) {
        newToken.uid = user.id;
        newToken.jwtToken = (user as User).token;
      }
      return newToken;
    },
    async redirect({ url, baseUrl }: any) {
      return `${baseUrl}/dashboard`;
    },
  },
};
