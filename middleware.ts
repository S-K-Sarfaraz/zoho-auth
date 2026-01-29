import { withAuth } from "next-auth/middleware";

export default withAuth({
    pages: {
        signIn: "/login",
    },
});

export const config = {
    // Protect the dashboard and any sub-routes
    matcher: ["/dashboard/:path*"],
};
