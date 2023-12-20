import { Review } from "./Review";
import { Tag } from "./Tags";
import { User } from "./User";

export interface Highlight {
    highlightId: string;
    highlightURL: string;
}

export interface Talent {
    talentId: string;
    description: string;
    verified_status: string;
    rating: string;
    price: number;
    auth: User;
    tags: Tag[];
    highlights: Highlight[];
    reviews: Review[];
}
