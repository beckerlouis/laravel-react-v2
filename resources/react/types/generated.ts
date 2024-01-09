export type PageData = {
    seo: SeoPageData | null;
};
export type SeoPageData = {
    title: string;
    description: string;
    keywords: Array<any>;
};
export type UserData = {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
    created_at: string;
    updated_at: string;
};
