import { REGISTER_API } from "@/helpers/api-routes";


export const register = (payload) => {
	return fetch(REGISTER_API, {
		method: "post",
		body: JSON.stringify(payload),
		headers: {
			"Content-Type": "application/json",
		},
	});
};