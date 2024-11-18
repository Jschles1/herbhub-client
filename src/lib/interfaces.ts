interface LabCompound {
    name: string;
    value: number;
    unit: '%' | 'mg';
    type: 'cannabinoid' | 'terpene';
}

export interface Product {
    url: string;
    dispensaryId: string;
    subcategoryType: string;
    categoryType: string;
    description: string;
    image: string | null;
    weight: string;
    normalPrice: number;
    promoPrice: number | null;
    unit: string;
    quantity: number | null;
    strain: string;
    strainType: string;
    lastSold: string;
    thcPercent: number | null;
    cbdPercent: number | null;
    thcContent: number | null;
    cbdContent: number | null;
    lowestPrice: number;
    menuType: string;
    terpenes: LabCompound[];
    includedTerpenes: string;
    cannabinoids: LabCompound[];
    includedCannabinoids: string;
    brand: string;
    dispensaryName: string;
    dispensaryLocation: string;
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
    id: string;
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
