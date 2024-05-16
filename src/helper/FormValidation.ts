import * as Yup from 'yup';

// login validation
export const loginValidationSchema = Yup.object({
    credential: Yup.string().email('Invalid email address').required('Email ID is required'),
    password: Yup.string().required('Password is required')
});
// category validation
export const categoryValidationSchema = Yup.object({
    category_name: Yup.string()
        .matches(/^[A-Za-z\s]+$/, 'Category name can only contain alphabets and spaces')
        .required('Category name is required'),
});