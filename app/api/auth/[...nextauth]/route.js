import User from "@/models/User";
import { connectDB } from "@/utils/connectDB";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session }) {
      try {
        const currentUser = await User.findOne({ email: session.user.email });

        session.user.id = currentUser?._id?.toString();

        return session;
        console.log(session);
      } catch (error) {
        console.log(error);
      }
    },
    async signIn({ profile }) {
      try {
        await connectDB();

        const isExists = await User.findOne({ email: profile.email });

        if (!isExists) {
          await User.create({
            name: profile.name.replace(" ", ""),
            email: profile.email,
            image: profile.picture,
          });
        }

        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },
});

export { handler as GET, handler as POST };
