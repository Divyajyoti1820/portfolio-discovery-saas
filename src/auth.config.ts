import { NextAuthConfig } from "next-auth";

/* Important for handling Next-Auth Types*/
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { JWT } from "next-auth/jwt";
/* Important for handling Next-Auth Types*/

import GitHub from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";

import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/prisma";

import z from "zod";

/* Handling type of Next-Auth */
declare module "next-auth/jwt" {
  interface JWT {
    id: string | undefined;
  }
}
declare module "@auth/core/jwt" {
  interface JWT {
    id: string | undefined;
  }
}

/* Form Schema */
const CredentialsSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});
/* Form Schema */

export default {
  adapter: PrismaAdapter(prisma),
  providers: [GitHub],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    session({ session, token }) {
      if (token.id) {
        session.user.id = token.id;
      }

      return session;
    },
    jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
  },
} satisfies NextAuthConfig;
