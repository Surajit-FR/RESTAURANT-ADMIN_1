import * as Yup from 'yup';

// login validation
export const loginValidationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email ID is required'),
    password: Yup.string().required('Password is required'),
});

// category validation
export const categoryValidationSchema = Yup.object({
    categoryName: Yup.string()
        .matches(/^[A-Za-z\s]+$/, 'Category name can only contain alphabets and spaces')
        .required('Category name is required'),
});

// add product validation
export const addProductValidationSchema = Yup.object({
    productTitle: Yup.string().required("Product title is required"),
    sku: Yup.string()
        .required("SKU is required")
        .matches(/^[a-zA-Z0-9_-]+$/, "SKU can only contain alphanumeric characters, hyphens, and underscores"),
    offer: Yup.string().required("Offer selection is required"),
    offerPercentage: Yup.number()
        .when('offer', {
            is: (offer: any) => offer === 'true', // Ensure this matches the offer value used in the form (true/false as strings)
            then: (schema) => schema.required('Offer percentage is required').min(0, 'Minimum value is 0').max(100, 'Maximum value is 100'),
            otherwise: (schema) => schema.nullable()
        }),
    coverImage: Yup.mixed().required("Product's cover image is required"),
    productImages: Yup.array()
    .of(Yup.mixed().required("At least one product image is required"))
    .min(1, "At least one product image is required"), // Ensure at least one image is provided
    productDescription: Yup.string().required("Product description is required"),
    price: Yup.number().required("Price is required").positive("Price must be a positive number"),
    availability: Yup.string().required("Availability selection is required"),
    visibility: Yup.string().required("Visibility selection is required"),
    category: Yup.string().required("Category selection is required"),
    tags: Yup.array()
        .of(
            Yup.string()
                .min(1, 'Tag must have at least 1 character')
                .max(50, 'Tag must have at most 50 characters')
        )
        .optional()
        .test('unique', 'Tags must be unique', (value) => {
            return Array.isArray(value) ? new Set(value).size === value.length : true;
        }) // Ensure all tags are unique
});