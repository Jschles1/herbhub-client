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
    lowestPrice: number;
    prices: ProductPrice[];
    quantity?: number;
    image?: string;
    brand: string;
    reviewStats?: {
        totalRatings: number;
        averageRating: number;
    };
    url?: string;
}

export interface ProductPrice {
    weight: number | string;
    unit: string;
    normalPrice: number;
    promoPrice?: number;
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
