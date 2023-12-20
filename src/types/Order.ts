import { Talent } from "./Talent";
import { User } from "./User";

export interface Order {
    orderId: string;
    talentId: string;
    customerId: string;
    name: string;
    type: string;
    price: number;
    date: string;
    start_hour: string;
    end_hour: string;
    total_hour: number;
    total_amount: number;
    order_status: string;
    payment_type: string | null;
    transaction_status: string;
    token: string;
    redirect_url: string;
    transaction_time: string | null;
    talent?: Talent;
    customer?: User;
    createdAt: string;
    updatedAt: string;
}
