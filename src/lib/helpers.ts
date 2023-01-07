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
            break;
    }
};

export const getProductPrices = (product: Product) => {
    let price: number = 0;
    let promoPrice: number = 0;
    let weight = product.weight[0];
    const prices = Object.values(product.price).filter(
        (el) => el && typeof el !== 'string',
    );
    const promoPrices =
        (product.promoPrice &&
            Object.values(product.promoPrice).filter(
                (el) => el && typeof el !== 'string',
            )) ||
        [];
    if (prices.length === 1) {
        price = prices[0];
    } else if (prices.length > 1) {
        console.warn(prices);
        // TODO
    }

    if (promoPrices.length === 1) {
        promoPrice = promoPrices[0];
    } else if (promoPrices.length > 1) {
        console.warn(promoPrices);
        // TODO
    }

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
    const productSlug = encodeURIComponent(
        product.strain.toLowerCase().replaceAll(' ', '-'),
    );
    return `/${dispensarySlug}/${productSlug}`;
};
