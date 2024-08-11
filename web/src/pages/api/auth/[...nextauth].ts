import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const user = await getUserByEmail(credentials.email);
        if (!user || !await verifyPassword(credentials.password, user.password)) {
          throw new Error('Invalid email or password');
        }
        return { email: user.email, role: user.role };
      }
    })
  ],
  callbacks: {
    async session(session, user) {
      session.user.role = user.role;
      return session;
    }
  }
});

// Helper functions like getUserByEmail and verifyPassword are implemented in src/utils/auth.ts
