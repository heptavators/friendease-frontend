import { Customer } from "./User";

export interface Review {
    reviewId: string;
    customerId: string;
    review: string;
    rating: number;
    mediaURL: string | null;
    mediaNameFile: string | null;
    customer: Customer;
    createdAt: string;
    updatedAt: string;
}
