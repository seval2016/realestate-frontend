"use server";

import { AuthError } from "next-auth";

import {
	convertFormDataToJSON,
	response,
	transformYupErrors,
	YupValidationError,
} from "@/helpers/form-validation";
import { RegisterSchema } from "@/helpers/schemas/register-schema";
import { register } from "@/services/register-service";


export const registerAction = async (prevState, formData) => {
	try {
		const fields = convertFormDataToJSON(formData);

		RegisterSchema.validateSync(fields, { abortEarly: false }); 
		
        const res = await register(fields);
		let data;
		try {
			data = await res.json();
		} catch (e) {
			data = null; 
		}

        if (!res.ok) {
            return response(false, "", data?.validations);
        }

        revalidatePath("/dashboard");

		return response(true, "You have successfully registered"); 
        
	} catch (err) {
		if (err instanceof YupValidationError) { 
			return transformYupErrors(err.inner);
		}

        throw err;               
        
	}
};
