export interface Tag {
    tagId: string;
    name: string;
    createdAt?: string;
    updatedAt?: string;
    TagTalent?: {
        talentId: string;
        tagId: string;
    }
}
