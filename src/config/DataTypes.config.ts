// Header type
export type CustomHeadersType = {
    headers: {
        Authorization: string
    }
}

// Form input type
export type formValuesType = {
    category_name?: string;
    category_desc?: string;
    productTitle?: string;
    offer?: string;
    offerPercentage?: string;
    productImage?: string | null;
    productDescription?: string;
    price?: string;
    availability?: string;
    visibility?: string;
    categories?: Array<string>;
};

// Form value props type
export type FormValues_Props = {
    data?: formValuesType | FormData | undefined;
    header?: CustomHeadersType | undefined;
    page?: number | undefined;
    pageSize?: number | undefined;
    navigate?: any;
    category_id?: string | undefined;
};

// Add category success resp type
export type AddCategorySuccessResponse = {
    message: string;
    success: boolean;
};

// Add Product success resp type
export type AddProductSuccessResponse = {
    message: string;
    success: boolean;
};

// Signin input type
export type signinInputValues = {
    credential?: string;
    password?: string;
    remember_me?: boolean;
};

// Form input Event type
export type SyntheticBaseEvent = {
    target: {
        value: string;
        name: string;
    };
};

// User auth props type
export type UserAuth_Props = {
    data: signinInputValues;
    navigate: any
};

// Define the type for a single permission
export type Permission = {
    name: string;
};

// Define the type for the role, which includes an array of permissions
export type Role = {
    name: string;
    permissions: Permission[];
};

// Define the type for the login success response
export type LoginSuccessResponse = {
    data: {
        _id: string;
        full_name: string;
        email: string;
        password: string;
        role: Role;
        is_active: boolean;
        is_delete: boolean;
        remember_me: boolean;
        createdAt: string;
        updatedAt: string;
    };
    message: string;
    success: boolean;
    token: string;
};

// CustomAlertProps
export type CustomAlertProps = {
    type: 'success' | 'danger' | 'warning' | 'info' | 'dark';
    message: string;
    onClose: () => void;
}

// User drop down links type
export type dropdownItemsType = {
    icon: string;
    text: string;
    link: string;
};

// Define the pagination type
export type Pagination_Type = {
    pageCount: number;
    pageNumber: number;
    changePage: (data: { selected: number }) => void;
};

// Category list type
export type CategoryListType = {
    _id: string;
    categoryID: string;
    category_name: string;
    category_desc: string;
    is_delete: boolean,
    createdAt: string;
    updatedAt: string;
    __v: string;
};

// Promise retun type FetchAllUserResponse
export type FetchAllCategoryResponse = {
    data: [CategoryListType];
    message: string;
    success: boolean;
};