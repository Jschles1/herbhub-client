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
        // console.log('Multiple prices found', product);
    }

    const basePrice = prices[0];
    const price = basePrice.normalPrice;
    const promoPrice = basePrice?.promoPrice || 0;
    const weight = basePrice.unit;
    const weightAmount =
        basePrice.weight === 1 ||
        basePrice.weight === null ||
        (typeof basePrice.weight === 'string' &&
            (basePrice.weight as string).toLowerCase() === 'n/a')
            ? ''
            : basePrice.weight;

    return {
        price: price.toFixed(2),
        promoPrice: promoPrice.toFixed(2),
        weight: `${weightAmount}${weight}`,
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

export const addThe = (word: string) => {
    return `the ${word}`;
};

export const getDispensaryNameFromParam = (param: string) => {
    switch (param) {
        case 'botanist':
        case 'cannabist':
            return addThe(param);
        case 'apothecarium':
            return 'Apothecarium Dispensary';
        case 'ayr':
            return 'Ayr Wellness';
        case 'zenleaf':
            return 'Zen Leaf';
        case 'urbn':
            return 'Urb’n Dispensary';
        case 'brutes':
            return "Brute's Roots";
        case 'valleywellness':
            return 'Valley Wellness Llc';
        case 'holistic':
            return 'Holistic Solutions Llc';
        case 'unionchill':
            return 'Union Chill';
        case 'novafarms':
            return 'Nova Farms';
        case 'sweetspot':
            return 'Sweet Spot';
        case 'earth':
            return 'Earth & Ivy';
        case 'cloudnine':
            return 'Cloud Nine Dispensary';
        case 'dankpoet':
            return 'Dank Poet Dispensary';
        case 'bloc':
        case 'ascend':
        case 'curaleaf':
        case 'rise':
        case 'doobiez':
        case 'soulflora':
        case 'phasal':
            return param;
        default:
            return param;
    }
};

export function capitalizeFirstLetter(str: string) {
    return str
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

export function formatDashedString(str: string, splitChar = '-') {
    const hasDash = splitChar === '-' && str.includes('---');
    if (hasDash) {
        str = str.replace('---', '***');
    }

    let finalString = str
        .split(splitChar)
        .map((word) => capitalizeFirstLetter(word))
        .join(' ');

    if (hasDash) {
        finalString = finalString.replace('***', ' - ');
    }

    return finalString;
}

export function formatDispensaryName(str: string) {
    const [dispensaryName, ...dispensaryLocation] = str.split('-');
    return {
        dispensaryName: dispensaryName,
        dispensaryLocation: dispensaryLocation.join('-'),
    };
}

export function getDisplayDispensaryName(dispensaryName: string) {
    if (dispensaryName === 'Terrapin Investment Fund') {
        return 'The Station';
    }
    if (dispensaryName.includes('Dispensary Of')) return dispensaryName;
    if (dispensaryName.includes('Mpx') || dispensaryName.includes('Urb')) {
        return dispensaryName.replace('Dispensary', '').toUpperCase();
    }
    return dispensaryName.replace('Dispensary', '').replace('Llc', 'LLC');
}

export const debounce = (func: any, timeout = 600) => {
    let timer: ReturnType<typeof setTimeout>;
    return (...args: any) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, args);
        }, timeout);
    };
};

export function getCurrentDateString() {
    const now = new Date();
    const hour = now.getHours();
    const minutes = now.getMinutes();

    // If current time is between 12AM and 8:30AM, return the previous day
    if (hour < 8 || (hour === 8 && minutes < 30)) {
        now.setDate(now.getDate() - 1);
    }

    return `${now.getFullYear()}/${now.getMonth() + 1}/${now.getDate()}`;
}
