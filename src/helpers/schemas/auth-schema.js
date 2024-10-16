import * as Yup from "yup";

export const AuthSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
        .min(8, "Min 8 chars")
        .matches(/[a-z]+/, "At least one lowercase")
        .matches(/[A-Z]+/, "At least one uppercase")
        .matches(/\d+/, "At least one number")
        .required("Required"),
})
