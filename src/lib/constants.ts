export const CATEGORY_FILTERS = [
    {
        name: 'Strain Type',
        paramName: 'strainType',
        options: [
            {
                name: 'Indica',
                value: 'str/indica',
            },
            {
                name: 'Sativa',
                value: 'str/sativa',
            },
            {
                name: 'Hybrid',
                value: 'str/hybrid',
            },
        ],
    },
    {
        name: 'Product Type',
        paramName: 'productType',
        options: [
            {
                name: 'Flower',
                value: 'type/flower',
            },
            {
                name: 'Pre-rolls',
                value: 'type/pre-rolls',
            },
            {
                name: 'Cartridges',
                value: 'type/cartridges',
            },
            {
                name: 'Concentrates',
                value: 'type/concentrates',
            },
            {
                name: 'Extracts',
                value: 'type/extracts',
            },
            {
                name: 'Edibles',
                value: 'type/edibles',
            },
            {
                name: 'Topical',
                value: 'type/topical',
            },
            {
                name: 'Tinctures',
                value: 'type/tinctures',
            },
        ],
    },
    {
        name: 'Brand',
        paramName: 'productBrand',
        options: [
            {
                name: 'Airo',
                value: 'br/airo',
            },
            {
                name: 'Ozone',
                value: 'br/ozone',
            },
            {
                name: 'Verano',
                value: 'br/verano',
            },
            {
                name: 'Curaleaf',
                value: 'br/curaleaf',
            },
            {
                name: 'Select',
                value: 'br/select',
            },
            {
                name: 'Cookies',
                value: 'br/cookies',
            },
            {
                name: 'Columbia Care',
                value: 'br/columbia-care',
            },
            {
                name: 'Kind Tree',
                value: 'br/kind-tree',
            },
            {
                name: 'Valhalla',
                value: 'br/valhalla',
            },
            {
                name: 'Gage',
                value: 'br/gage',
            },
            {
                name: 'Simply Herb',
                value: 'br/simply-herb',
            },
            {
                name: 'The Botanist',
                value: 'br/the-botanist',
            },
            {
                name: 'Essence',
                value: 'br/essence',
            },
            {
                name: 'Rythm',
                value: 'br/rythm',
            },
            {
                name: 'TerrAscend',
                value: 'br/terrascend',
            },
            {
                name: 'Other',
                value: 'br/other',
            },
        ],
    },
    {
        name: 'Dispensary',
        paramName: 'dispensary',
        options: [
            {
                name: 'Ascend - Montclair',
                value: 'loc/ascend-montclair',
            },
            {
                name: 'Ascend - Fort Lee',
                value: 'loc/ascend-fort-lee',
            },
            {
                name: 'Ascend - Rochelle Park',
                value: 'loc/ascend-rochelle-park',
            },
            {
                name: 'Apothecarium - Lodi',
                value: 'loc/apothecarium-lodi',
            },
            {
                name: 'Apothecarium - Phillipsburg',
                value: 'loc/apothecarium-phillipsburg',
            },
            {
                name: 'Apothecarium - Maplewood',
                value: 'loc/apothecarium-maplewood',
            },
            {
                name: 'Bloc - Ewing',
                value: 'loc/bloc-ewing',
            },
            {
                name: 'Cannabist - Deptford',
                value: 'loc/cannabist-deptford',
            },
            {
                name: 'Cannabist - Vineland',
                value: 'loc/cannabist-vineland',
            },
            {
                name: 'Botanist - Egg Harbor',
                value: 'loc/botanist-egg-harbor-twp',
            },
            {
                name: 'Botanist - Williamstown',
                value: 'loc/botanist-williamstown',
            },
            {
                name: 'Curaleaf - Bellmawr',
                value: 'loc/curaleaf-bellmawr',
            },
            {
                name: 'Curaleaf - Bordentown',
                value: 'loc/curaleaf-bordentown',
            },
            {
                name: 'Curaleaf - Edgewater Park',
                value: 'loc/curaleaf-edgewater-park',
            },
            {
                name: 'AYR - Union',
                value: 'loc/ayr-union',
            },
            {
                name: 'AYR - Woodbridge',
                value: 'loc/ayr-woodbridge',
            },
            {
                name: 'AYR - Eatontown',
                value: 'loc/ayr-eatontown',
            },
            {
                name: 'Rise - Paterson',
                value: 'loc/rise-paterson',
            },
            {
                name: 'Rise - Bloomfield',
                value: 'loc/rise-bloomfield',
            },
            {
                name: 'Zen Leaf - Neptune',
                value: 'loc/zenleaf-neptune',
            },
            {
                name: 'Zen Leaf - Elizabeth',
                value: 'loc/zenleaf-elizabeth',
            },
            {
                name: 'Zen Leaf - Lawrence',
                value: 'loc/zenleaf-lawrence-twp',
            },
            {
                name: 'Doobiez - West Milford',
                value: 'loc/doobiez-west-milford',
            },
            {
                name: "URB'N Dispensary - Newark",
                value: 'loc/urbn-newark',
            },
            {
                name: 'Soulflora - Newfoundland',
                value: 'loc/soulflora-newfoundland',
            },
            {
                name: "Brute's Roots - Egg Harbor",
                value: 'loc/brutes-egg-harbor-twp',
            },
            {
                name: 'Valley Wellness LLC - Raritan',
                value: 'loc/valleywellness-raritan',
            },
            {
                name: 'Holistic Solutions LLC - Atco',
                value: 'loc/holistic-atco',
            },
            {
                name: 'Union Chill - Lambertville',
                value: 'loc/unionchill-lambertville',
            },
            {
                name: 'Phasal - Runnemede',
                value: 'loc/phasal-runnemede',
            },
            {
                name: 'Nova Farms - Woodbury',
                value: 'loc/novafarms-woodbury',
            },
            {
                name: 'Sweet Spot - Voorhees',
                value: 'loc/sweetspot-voorhees',
            },
            {
                name: 'Earth & Ivy - New Brunswick',
                value: 'loc/earth-new-brunswick',
            },
        ],
    },
];

export const SORT_BY_OPTIONS = [
    {
        label: 'Sort By: A-Z',
        value: 'alphabetical',
    },
    {
        label: 'Sort By: Price Low to High',
        value: 'price-low-to-high',
    },
    {
        label: 'Sort By: Price High to Low',
        value: 'price-high-to-low',
    },
    {
        label: 'Sort By: THC% Low to High',
        value: 'thc-low-to-high',
    },
    {
        label: 'Sort By: THC% High to Low',
        value: 'thc-high-to-low',
    },
    {
        label: 'Sort By: CBD% Low to High',
        value: 'cbd-low-to-high',
    },
    {
        label: 'Sort By: CBD% High to Low',
        value: 'cbd-high-to-low',
    },
];
