import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { login } from "./services/auth-service";
import { getIsTokenValid, getIsUserAuthorized } from "./helpers/auth-helper";

const config = {
	providers: [
		Credentials({
			authorize: async (credentials) => { 
				const res = await login(credentials);  
				const data = await res.json();

				if (!res.ok) {
                      console.error("Login failed:", data);
                      return null;
                 } 

				const payload = {
					user: { ...data },
					accessToken: data.token.split(" ")[1],
				};
				delete payload.user.token;
				return payload;
			},
		}),

	],
	callbacks: {
		authorized({ auth, request }) {
			const { pathname } = request.nextUrl;  

			const userRole = auth?.user?.role; 
			const isLoggedIn = !!userRole;   

			const isInLoginPage = pathname.startsWith("/login");   
			const isInDashboardPages = pathname.startsWith("/dashboard");
			const isTokenValid = getIsTokenValid(auth?.accessToken);

			if (isLoggedIn && isTokenValid) { 
				if (isInLoginPage) {   
					const url = new URL("/dashboard", request.nextUrl); 
					return Response.redirect(url);
				 } else if (isInDashboardPages) { 
					const isUserAuthorized = getIsUserAuthorized(
						userRole,
						pathname
					);  

					if (!isUserAuthorized) {  
						const url = new URL("/unauthorized", request.nextUrl);
						return Response.redirect(url);
					}

					return true;
					
				 }
			} else if (isInDashboardPages) {  
				return false;
			}

			return true;           
		},

	
		async jwt({ token, user }) {                 
			return { ...user, ...token };  
		},

		async session({ session, token }) {
			const { accessToken, user } = token;   

			const isTokenValid = getIsTokenValid(accessToken); 
			if (!isTokenValid) return null;

			

			session.user = user;
			session.accessToken = accessToken;
			return session;
		},
	},
	pages: {
		signIn: "/login",
	},
};

export const { handlers, signIn, signOut, auth } = NextAuth(config);




