export interface Product {
    id?: string;
    dispensaryName: string;
    dispensaryLocation: string;
    strain: string;
    strainType: string;
    categoryType: string;
    description: string;
    weight: string | string[];
    thc?: number;
    cbd?: number;
    promoPrice?: PriceOptions;
    price: PriceOptions;
    quantity?: number;
    image?: string;
    brand: string;
    reviewStats?: {
        totalRatings: number;
        averageRating: number;
    };
    url?: string;
}

export interface PriceOptions {
    halfGram?: number;
    gram?: number;
    twoGram?: number;
    eighthOunce?: number;
    quarterOunce?: number;
    halfOunce?: number;
    ounce?: number;
    other?: number;
}
