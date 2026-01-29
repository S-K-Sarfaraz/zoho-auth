import NextAuth from "next-auth";
import ZohoProvider from "next-auth/providers/zoho";

const handler = NextAuth({
    providers: [
        ZohoProvider({
            clientId: process.env.ZOHO_CLIENT_ID!,
            clientSecret: process.env.ZOHO_CLIENT_SECRET!,
            authorization: {
                params: {
                    scope: "ZohoAccounts.profile.READ ZohoAccounts.email.READ",
                },
            },
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
