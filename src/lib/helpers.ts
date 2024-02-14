import { Product } from './interfaces';

export const mapProductImage = (product: Product) => {
    if (product.image) {
        return product.image;
    }

    switch (product.categoryType) {
        case 'flower':
            return '/icons/icons8-weed-64.png';
        case 'pre-rolls':
            return '/icons/icons8-joint-64.png';
        case 'cartridges':
            return '/icons/icons8-cartridge-64.png';
        case 'extracts':
            return '/icons/icons8-extraction-64.png';
        case 'edibles':
            return '/icons/icons8-cupcake-64.png';
        case 'concentrates':
            return '/icons/icons8-crystals-64.png';
        case 'tinctures':
            return '/icons/icons8-tincture-64.png';
        case 'topical':
            return '/icons/icons8-cream-64.png';
        default:
            return '';
    }
};

export const parseProductWeightUnit = (weight: string) => {
    if (weight === 'each') {
        return ` ${weight}`;
    } else {
        return ` per ${weight}`;
    }
};

export const getProductPrices = (product: Product) => {
    const { prices } = product;

    // TODO: Add logic to handle products with multiple weights
    if (prices.length > 1) {
        console.log('Multiple prices found', product);
    }

    const basePrice = prices[0];
    const price = basePrice.normalPrice;
    const promoPrice = basePrice?.promoPrice || 0;
    const weight = basePrice.unit;

    return {
        price: price.toFixed(2),
        promoPrice: promoPrice.toFixed(2),
        weight,
    };
};

export const getProductUrl = (product: Product) => {
    const dispensarySlug = encodeURIComponent(
        product.dispensaryName.toLowerCase() +
            '-' +
            product.dispensaryLocation.toLowerCase(),
    );
    const productSlug = encodeURIComponent(product.strain.replaceAll(' ', '-'));
    return `/${dispensarySlug}/${productSlug}`;
};
