export type TCredentials = {
    email: string,
    password: string,
};

export type TLoginCredentials = TCredentials & {};

export type TRegisterCredentials = TCredentials & {
    fullName: string,
    avatar: string,
    coverImage: string,
};

export type Permission = {
    _id: string;
    name: string;
    description: string;
};

export type Role = {
    _id: string;
    name: string;
    permissions: Permission[];
};

export type User = {
    _id: string,
    fullName: string,
    email: string,
    phone: string,
    web_theme: string,
    role: Role,
    isDeleted: boolean,
    isActive: boolean,
    createdAt: string,
    updatedAt: string,
    __v: number,
};

export type UserData = {
    user: User,
    accessToken?: string,
    refreshToken?: string,
};