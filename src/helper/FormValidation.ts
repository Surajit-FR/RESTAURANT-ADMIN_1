import * as Yup from 'yup';

// login validation
export const loginValidationSchema = Yup.object({
    credential: Yup.string().email('Invalid email address').required('Email ID is required'),
    password: Yup.string().required('Password is required')
});