import NextAuth from "next-auth";
import ZohoProvider from "next-auth/providers/zoho";

const handler = NextAuth({
    providers: [
        ZohoProvider({
            clientId: process.env.ZOHO_CLIENT_ID!,
            clientSecret: process.env.ZOHO_CLIENT_SECRET!,
            authorization: "https://accounts.zoho.in/oauth/v2/auth?scope=ZohoAccounts.profile.READ%20ZohoAccounts.email.READ",
            token: "https://accounts.zoho.in/oauth/v2/token",
            userinfo: "https://accounts.zoho.in/oauth/user/info",
        }),
    ],
    pages: {
        signIn: "/login",
    },
    callbacks: {
        async session({ session, token }) {
            return session;
        },
        async jwt({ token, user, account }) {
            return token;
        },
    },
    secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
