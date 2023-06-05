
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import FacebookProvider from 'next-auth/providers/facebook';

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,

      }),
      FacebookProvider({
        clientId: process.env.FACEBOOK_CLIENT_ID,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      }),
    // ...add more providers here
  ],

    callbacks: {
    async signIn(user, account, profile, email, credentials) {




      // if (user.account.provider === 'google') {
      // const response = await fetch('http://localhost:3001/auth/login/success', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(payload),
      // });
      //   return true;
      //   }
      // if (user.account.provider === 'facebook') {
      // const response = await fetch('http://localhost:3001/auth/login/success', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   }
      // });
        return true;
        }
      },
    }
export default NextAuth(authOptions)