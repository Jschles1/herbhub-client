interface LabCompound {
    name: string;
    value: number;
    unit: '%' | 'mg';
    type: 'cannabinoid' | 'terpene';
}

export interface Product {
    id?: string;
    dispensaryName: string;
    dispensaryLocation: string;
    strain: string;
    strainType: string;
    categoryType: string;
    description: string;
    weight: string | string[];
    thcPercent?: number;
    cbdPercent?: number;
    thcContent?: number;
    cbdContent?: number;
    promoPrice?: PriceOptions;
    terpenes: LabCompound[];
    cannabinoids: LabCompound[];
    includedTerpenes: string;
    includedCannabinoids: string;
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
export interface Dispensary {
    name: string;
    location: string;
    address: string;
    zipCode: string;
    phoneNumber: string;
    type: string;
    placeId: string;
    openingHours: string[];
    formattedPhoneNumber: string;
    internationalPhoneNumber: string;
    wheelchairAccessible: boolean;
    fullAddress: string;
    url: string;
    geocode: string;
    googleMapsUrl: string;
}

export interface ProductData {
    products: Product[];
    lastUpdated: string;
}
