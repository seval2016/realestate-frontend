import * as Yup from "yup";

export const RegisterSchema = Yup.object({
    firstname: Yup.string().required("Required"),
    lastname: Yup.string().required("Required"),
    phone: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
        .min(8, "Min 8 chars")
        .matches(/[a-z]+/, "At least one lowercase")
        .matches(/[A-Z]+/, "At least one uppercase")
        .matches(/\d+/, "At least one number")
        .required("Required"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Required"),
})
