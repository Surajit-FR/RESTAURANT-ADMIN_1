// Form input type
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
}

// User drop down links type
export type dropdownItemsType = {
    icon: string;
    text: string;
    link: string;
};