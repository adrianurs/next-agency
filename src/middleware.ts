import NextAuth from 'next-auth';

// Iclude here all the routes that needs authorization
const PROTECTED_ROUTES = ['/blog'];

// Iclude here all the routes that needs admin authorization
const ADMIN_PROTECTED_ROUTES = ['/admin/users'];

// Include here all the routes that can be accessed only when there is no session
const NO_SESSION_ROUTES = ['/sign-in', '/sign-up'];

export default NextAuth({
  pages: {
    signIn: '/sign-in'
  },
  providers: [],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...(user && user) };
    },

    async session({ session, token }) {
      if (token) {
        session.user = { ...(token && token) };
      }
      return session;
    },

    async authorized({ request, auth }) {
      if (ADMIN_PROTECTED_ROUTES.includes(request.nextUrl.pathname) && !auth?.user.isAdmin)
        return Response.redirect(new URL('/sign-in', request.nextUrl));

      if (PROTECTED_ROUTES.includes(request.nextUrl.pathname) && !auth?.user)
        return Response.redirect(new URL('/sign-in', request.nextUrl));

      if (NO_SESSION_ROUTES.includes(request.nextUrl.pathname) && auth?.user)
        return Response.redirect(new URL('/', request.nextUrl));

      return true;
    }
  }
}).auth;

export const config = {
  matcher: ['/((?!api|static|.*\\..*|_next).*)']
};
