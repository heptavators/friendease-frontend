import { Location } from './Location';

export interface Customer {
    authId: string;
    fullname: string;
    username: string;
    avatar: string;
}

export interface User extends Customer { 
    phone_number: string;
    user_preferences: string | null;
    location: Location;

}

export interface AuthenticatedUser extends User {
    email: string;
    gender: string;
    bio: string;
    bod: string;
    status: string;
    roles: string;
    device_token: string;
    createdAt?: string;
    updatedAt?: string;
}



