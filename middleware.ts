export { withAuth } from 'next-auth/middleware'

export const config = {
    matcher: [
        '/trips',
        '/reservations',
        '/properties',
        '/favorites',
    ]
}

import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/auth/signin",
  },
});