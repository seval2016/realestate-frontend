import { auth } from "@/auth";
import { config } from "./config";

export const getAuthHeader = async () => {   
	const session = await auth();
	const token = session?.accessToken;

	let authHeader = {
		"Content-Type": "application/json",
	};

	if (token) {       
		authHeader = {
			Authorization: `Bearer ${token}`,       
			...authHeader,
		};
    }  

	return authHeader;
};



const parseJWT = (token) => {
	

	return JSON.parse(atob(token.split(".")[1]));
};

export const getIsTokenValid = (token) => {
	if (!token) return false;  

	const jwtExpireTimeStamp = parseJWT(token).exp;   

	const jwtExpireDateTime = new Date(jwtExpireTimeStamp * 1000);  
	

	return jwtExpireDateTime > new Date();     
};


export const getIsUserAuthorized = (userRole, pathname) => {
	const userRight = config.userRightsOnRoutes.find(item=> item.urlRegex.test(pathname))
  

    if(!userRight) return false;

	return userRight.roles.includes(userRole)
}






