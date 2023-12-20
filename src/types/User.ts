import { Location } from './Location';

export interface Customer {
    authId: string;
    fullname: string;
    username: string;
    avatar: string;
}

export interface User extends Customer {
    email: string;
    phone_number: string;
    bio: string;
    bod: string;
    gender: string;
    status: string;
    roles: string;
    device_token: string;
    user_preferences: string | null;
    location: Location;
    createdAt: string;
    updatedAt: string;
}



