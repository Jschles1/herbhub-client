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
                value: 'type/pre-roll',
            },
            {
                name: 'Cartridges',
                value: 'type/cartridge',
            },
            {
                name: 'Concentrates',
                value: 'type/concentrate',
            },
            {
                name: 'Extracts',
                value: 'type/extract',
            },
            {
                name: 'Edibles',
                value: 'type/edible',
            },
            {
                name: 'Topical',
                value: 'type/topical',
            },
            {
                name: 'Tinctures',
                value: 'type/tincture',
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
        ],
    },
    {
        name: 'Dispensary',
        paramName: 'dispensary',
        options: [
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
            {
                name: 'Cloud Nine Dispensary - North Plainfield',
                value: 'loc/cloudnine-north-plainfield',
            },
            {
                name: 'Dank Poet Dispensary - Washington',
                value: 'loc/dankpoet-washington',
            },
            {
                name: 'Blue Oak - Bloomfield',
                value: 'loc/blue#oak-bloomfield',
            },
            {
                name: 'Garden Greenz - Jersey City',
                value: 'loc/garden#greenz-jersey-city',
            },
            {
                name: 'Plantabis - Rahway',
                value: 'loc/plantabis-rahway',
            },
            {
                name: 'Phula - Mount Holly',
                value: 'loc/phula-mount-holly',
            },
            {
                name: 'Lemon 22 - Scotch Plains',
                value: 'loc/lemon#22-scotch-plains',
            },
            {
                name: 'Hackettstown Dispensary - Hackettstown',
                value: 'loc/hackettstown#dispensary-hackettstown',
            },
            {
                name: 'The Cannabis Place - Jersey City',
                value: 'loc/the#cannabis#place-jersey-city',
            },
            {
                name: 'Twisted Hat - Carneys Point',
                value: 'loc/twisted#hat#cannabis-Carney’s-Point',
            },
            {
                name: 'Enlighten Health & Wellness - Marlton',
                value: 'loc/enlighten#health#__and__#wellness-marlton',
            },
            {
                name: 'SilverLeaf Wellness - Somerset',
                value: 'loc/silverleaf#wellness-somerset',
            },
            {
                name: 'Dispensary of Somerset - Somerset',
                value: 'loc/dispensary#of#somerset-somerset',
            },
            {
                name: 'Baked By the River - Lambertville',
                value: 'loc/baked#by#the#river-lambertville',
            },
            {
                name: 'Sunny Tien - Atlantic City',
                value: 'loc/sunnytien-atlantic-city',
            },
            {
                name: 'Royal M - Plainfield',
                value: 'loc/royal#m-plainfield',
            },
            {
                name: 'Timber 5 - Somerset',
                value: 'loc/timber#5-somerset',
            },
            {
                name: 'Fire and Oak - Mount Holly',
                value: 'loc/fire#and#oak-mount-holly',
            },
            {
                name: 'Garfield Gardens Dispensary - Garfield',
                value: 'loc/garfield#gardens#dispensary-garfield',
            },
            {
                name: 'Unity Rd. Cannabis Shop - Somerset',
                value: 'loc/unity#rd.#cannabis#shop-somerset',
            },
            {
                name: 'Nightjar - Bloomfield',
                value: 'loc/nightjar-bloomfield',
            },
            {
                name: 'Mountain View Farmacy - West Milford',
                value: 'loc/mountain#view#farmacy-west-milford',
            },
            {
                name: 'A21 Wellness - Scotch Plains',
                value: 'loc/a21#wellness-scotch-plains',
            },
            {
                name: 'Pure Blossom - Pennington',
                value: 'loc/pure#blossom-pennington',
            },
            {
                name: 'Leaf Haus - Somerset',
                value: 'loc/leaf#haus-somerset',
            },
            {
                name: 'Castaway Cannabis - Delran',
                value: 'loc/castaway#cannabis-delran',
            },
            {
                name: 'The Station - Hoboken',
                value: 'loc/terrapin#investment#fund-hoboken',
            },
            {
                name: 'Midnight Greens - Blackwood',
                value: 'loc/midnight#greens-blackwood',
            },
            {
                name: 'Urge - Union',
                value: 'loc/urge-union',
            },
            {
                name: 'Explore Nirvana - Mount Laurel',
                value: 'loc/nirvana-mount-laurel',
            },
            {
                name: 'Downtown FLWR - Jersey City',
                value: 'loc/downtown#flwr-jersey-city',
            },
            {
                name: 'Sanctuary Cannabis - Scotch Plains',
                value: 'loc/sanctuary#cannabis-scotch-plains',
            },
            {
                name: 'Premo - Keyport',
                value: 'loc/premo-keyport',
            },
            {
                name: 'One Green Leaf - Gibbsboro',
                value: 'loc/one#green#leaf-gibbsboro',
            },
            {
                name: 'Zacate - Delran',
                value: 'loc/zacate-delran',
            },
            {
                name: 'Elevated by TheCannaBossLady - Maplewood',
                value: 'loc/elevated#by#thecannabosslady-maplewood',
            },
            {
                name: 'Voltaire NJ - Mount Holly',
                value: 'loc/voltaire#nj-mount-holly',
            },
            {
                name: 'Joy Leaf - Roselle',
                value: 'loc/joy#leaf-roselle',
            },
            {
                name: 'Blue Violets - Hoboken',
                value: 'loc/blue#violets-hoboken',
            },
            {
                name: 'Monteverde NJ - Red Bank',
                value: 'loc/monteverde#nj-red-bank',
            },
            {
                name: 'Flower & Flame Dispensary - Blackwood',
                value: 'loc/flower#__and__#flame#dispensary-blackwood',
            },
            {
                name: 'Bakin’ Bad  - Atlantic City',
                value: 'loc/bakin’#bad-atlantic-city',
            },
            {
                name: 'Healing Side - Atlantic City',
                value: 'loc/healing#side-atlantic-city',
            },
            {
                name: 'Holistic Re-Leaf - Rockaway',
                value: 'loc/holistic#re$leaf-rockaway',
            },
            {
                name: 'Organic Farms - Camden',
                value: 'loc/organic#farms-camden',
            },
            {
                name: 'Jersey Meds - Pennington',
                value: 'loc/jersey#meds-pennington',
            },
            {
                name: 'Natural Apothecary - Belleville',
                value: 'loc/natural#apothecary-belleville',
            },
            {
                name: 'Leaf Joint - Jersey City',
                value: 'loc/leaf#joint-jersey-city',
            },
            {
                name: 'Jersey Roots - West Milford',
                value: 'loc/jersey#roots-west-milford',
            },
            {
                name: 'Indigo - Brooklawn',
                value: 'loc/indigo-brooklawn',
            },
            {
                name: 'Green Oasis Dispensary - Atco',
                value: 'loc/green#oasis#dispensary-atco',
            },
            {
                name: 'Camden Apothecary - Camden',
                value: 'loc/camden#apothecary-camden',
            },
            {
                name: "Aunt Mary's Dispensary, LLC - Flemington",
                value: "loc/aunt#mary's#dispensary@#llc-flemington",
            },
            {
                name: 'Evolve Cannabis - Bordentown',
                value: 'loc/evolve#cannabis-bordentown',
            },
            {
                name: 'Highway 90 - Evesham',
                value: 'loc/highway#90-evesham',
            },
            // AI starts here
            {
                name: 'Township Green - Riverside',
                value: 'loc/township#green-riverside',
            },
            {
                name: 'Molly Ann Farms - Haledon',
                value: 'loc/molly#ann#farms-haledon',
            },
            {
                name: 'High Street Dispensary - Hackettstown',
                value: 'loc/high#street#dispensary-hackettstown',
            },
            {
                name: 'The Social Leaf - South Toms River',
                value: 'loc/the#social#leaf-south-toms-river',
            },
            {
                name: 'Legal Distribution - Atlantic City',
                value: 'loc/legal#distribution-atlantic-city',
            },
            {
                name: 'New Era Dispensary - South Bound Brook',
                value: 'loc/new#era#dispensary-south-bound-brook',
            },
            {
                name: 'G2 Dispensary - Rockaway',
                value: 'loc/g2#dispensary-rockaway',
            },
            {
                name: 'Brotherly Bud - Mount Ephraim',
                value: 'loc/brotherly#bud-mount-ephraim',
            },
            {
                name: 'City Leaves - Egg Harbor',
                value: 'loc/city#leaves-egg-harbor-twp',
            },
            {
                name: 'HoneyGrove - Gloucester Township',
                value: 'loc/honeygrove-gloucester-twp',
            },
            {
                name: 'Shore House Canna - West Cape May',
                value: 'loc/shore#house#canna-west-cape-may',
            },
            {
                name: 'Kind Kush - Rockaway',
                value: 'loc/kind#kush-rockaway',
            },
            {
                name: 'Design 710 - Atlantic City',
                value: 'loc/design#710-atlantic-city',
            },
            {
                name: 'Daylite Cannabis - Mount Laurel',
                value: 'loc/daylite#cannabis-mount-laurel',
            },
            {
                name: 'Moja Life - Trenton',
                value: 'loc/moja#life-trenton',
            },
            {
                name: 'Ript - Jersey City',
                value: 'loc/ript-jersey-city',
            },
            {
                name: 'Blossom Dispensary - Jersey City',
                value: 'loc/blossom#dispensary-jersey-city',
            },
            {
                name: 'Mass Grown - Mount Holly',
                value: 'loc/mass#grown-mount-holly',
            },
            {
                name: 'Anja - Highland Park',
                value: 'loc/anja-highland-park',
            },
            {
                name: 'High Profile Lakehurst - Lakehurst',
                value: 'loc/high#profile#lakehurst-lakehurst',
            },
            {
                name: 'Roots Dispensary - Willingboro',
                value: 'loc/roots#dispensary-willingboro',
            },
            {
                name: 'Gynsyng - Merchantville',
                value: 'loc/gynsyng-merchantville',
            },
            {
                name: 'Noire Dispensary - Maplewood',
                value: 'loc/noire-maplewood',
            },
            {
                name: 'Garden State Botanicals - North Brunswick',
                value: 'loc/garden#state#botanicals-north-brunswick',
            },
            {
                name: 'Golden Door Dispensary - Jersey City',
                value: 'loc/golden#door#dispensary-jersey-city',
            },
            {
                name: 'Puffin Store - New Brunswick',
                value: 'loc/puffin#store-new-brunswick',
            },
            {
                name: 'Elevated Herb - West Milford',
                value: 'loc/elevated#herb-west-milford',
            },
            {
                name: 'Cannabis Clubhouse - Sussex',
                value: 'loc/cannabis#clubhouse-sussex',
            },
            {
                name: 'Queen City Remedies - Plainfield',
                value: 'loc/queen#city#remedies-plainfield',
            },
            {
                name: 'Ohm Theory - Elmwood Park',
                value: 'loc/ohm#theory-elmwood-park',
            },
            {
                name: 'CannaBoy Treehouse - South Orange',
                value: 'loc/cannaboy#treehouse-south-orange',
            },
            {
                name: 'Med Leaf - Egg Harbor City',
                value: 'loc/med#leaf-egg-harbor-city',
            },
            {
                name: 'CREAM Cannabis Dispensary - Jersey City',
                value: 'loc/cream#cannabis#dispensary-jersey-city',
            },
            {
                name: 'Theo A. Cannabis - Franklin Park',
                value: 'loc/theo#a.#cannabis-franklin-park',
            },
            {
                name: 'Hello High - Hammonton',
                value: 'loc/hello#high-hammonton',
            },
            {
                name: 'Eastern Green - Voorhees',
                value: 'loc/eastern#green-voorhees',
            },
            {
                name: 'Emerald Tea Supply - Bloomfield',
                value: 'loc/emerald#tea#supply-bloomfield',
            },
            {
                name: 'Scarlet Reserve Room - Englishtown',
                value: 'loc/scarlet#reserve#room-englishtown',
            },
            // {
            //     name: "Nature's Motivation - Irvington",
            //     value: "loc/nature's#motivation-irvington",
            // },
            {
                name: 'Dispensary of Union - Union',
                value: 'loc/dispensary#of#union-union',
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
        label: 'Sort By: THC Content Low to High',
        value: 'thc-content-low-to-high',
    },
    {
        label: 'Sort By: THC Content High to Low',
        value: 'thc-content-high-to-low',
    },
    {
        label: 'Sort By: CBD% Low to High',
        value: 'cbd-low-to-high',
    },
    {
        label: 'Sort By: CBD% High to Low',
        value: 'cbd-high-to-low',
    },
    {
        label: 'Sort By: CBD Content Low to High',
        value: 'cbd-content-low-to-high',
    },
    {
        label: 'Sort By: CBD Content High to Low',
        value: 'cbd-content-high-to-low',
    },
];

export const TERPENES_MAP = {
    betacaryophyllene: 'Beta Caryophyllene',
    limonene: 'Limonene',
    betamyrcene: 'Beta Myrcene',
    bmyrcene: 'Beta Myrcene',
    linalool: 'Linalool',
    alphapinene: 'Alpha Pinene',
    apinene: 'Alpha Pinene',
    betaeudesmol: 'Beta Eudesmol',
    beudesmol: 'Beta Eudesmol',
    betapinene: 'Beta Pinene',
    bisabolol: 'Bisabolol',
    caryophylleneoxide: 'Caryophyllene Oxide',
    guaiol: 'Guaiol',
    humulene: 'Humulene',
    ocimene: 'Ocimene',
    terpinene: 'Terpinene',
    threecarene: 'Three Carene',
    transnerolidol: 'Trans Nerolidol',
    nerolidol: 'Nerolidol',
    eucalyptol: 'Eucalyptol',
    myrcene: 'Myrcene',
    terpinolene: 'Terpinolene',
    terpineol: 'Terpineol',
    alphabisabolol: 'Alpha Bisabolol',
    abisabolol: 'Alpha Bisabolol',
    caryophyllene: 'Caryophyllene',
    betacaryophylleneoxide: 'Beta Caryophyllene Oxide',
    bcaryophylleneoxide: 'Beta Caryophyllene Oxide',
    pinene: 'Pinene',
    fenchol: 'Fenchol',
    cedrene: 'Cedrene',
    valencene: 'Valencene',
    camphene: 'Camphene',
    phellandrene: 'Phellandrene',
    geranylacetate: 'Geranyl Acetate',
    transcaryophyllene: 'Trans Caryophyllene',
    geraniol: 'Geraniol',
    borneol: 'Borneol',
    paracymene: 'Para Cymene',
    isopulegol: 'Isopulegol',
    carene: 'Carene',
    sabinene: 'Sabinene',
    fenchylalcohol: 'Fenchyl Alcohol',
    bpinene: 'Beta Pinene',
};

export const TERPENES_INFO_MAP = {
    betacaryophyllene:
        "Beta Caryophyllene is a spicy, woody terpene commonly found in black pepper, cloves, and various herbs. It is unique among terpenes as it can interact with the body's endocannabinoid system. Known for its potential anti-inflammatory properties, it has been studied for possible therapeutic applications in pain and anxiety management.",
    limonene:
        'Limonene is a citrusy terpene predominantly found in citrus fruit peels, particularly lemons and oranges. It gives these fruits their characteristic fresh, energizing scent. Studies suggest it may have mood-elevating properties and potential anti-anxiety effects.',
    betamyrcene:
        "Beta Myrcene is one of the most abundant terpenes found in cannabis, with an earthy, musky aroma similar to cloves. It's also commonly found in hops, bay leaves, and mangoes. Research indicates it may have sedative and muscle-relaxing properties.",
    bmyrcene:
        "Beta Myrcene is one of the most abundant terpenes found in cannabis, with an earthy, musky aroma similar to cloves. It's also commonly found in hops, bay leaves, and mangoes. Research indicates it may have sedative and muscle-relaxing properties.",
    linalool:
        'Linalool is a floral terpene most famously found in lavender plants. It has been traditionally used in aromatherapy for its calming and relaxing properties. Studies suggest it may have anxiety-reducing and sleep-promoting effects.',
    alphapinene:
        "Alpha Pinene is the most commonly found terpene in nature, responsible for the fresh, crisp scent of pine needles and rosemary. It's known for its potential anti-inflammatory and bronchodilating properties. Research suggests it may help counter some of the memory impairment associated with THC.",
    apinene:
        "Alpha Pinene is the most commonly found terpene in nature, responsible for the fresh, crisp scent of pine needles and rosemary. It's known for its potential anti-inflammatory and bronchodilating properties. Research suggests it may help counter some of the memory impairment associated with THC.",
    betaeudesmol:
        'Beta Eudesmol is a sesquiterpene alcohol found in various plants including certain cannabis strains and eucalyptus. It has a woody, earthy aroma and is being studied for its potential therapeutic properties. Research suggests it may have neurological benefits.',
    beudesmol:
        'Beta Eudesmol is a sesquiterpene alcohol found in various plants including certain cannabis strains and eucalyptus. It has a woody, earthy aroma and is being studied for its potential therapeutic properties. Research suggests it may have neurological benefits.',
    betapinene:
        'Beta Pinene is a terpene found in pine needles, rosemary, and dill with a fresh, woody aroma. It shares many properties with its isomer Alpha Pinene but has its own unique characteristics. Studies suggest it may have anti-inflammatory and antimicrobial properties.',
    bisabolol:
        'Bisabolol is a floral terpene commonly found in chamomile flowers. It has a subtle, sweet floral aroma and has been used in cosmetics for its gentle properties. Research indicates it may have anti-inflammatory and anti-irritant properties.',
    caryophylleneoxide:
        "Caryophyllene Oxide is the oxidized form of Beta Caryophyllene, with a lightly spicy, woody scent. It's the compound drug-sniffing dogs are trained to detect in cannabis. Studies suggest it may have antifungal and anti-inflammatory properties.",
    guaiol: 'Guaiol is a terpene alcohol with a piney, woody scent found in guaiacum and cypress pine. It has been used in traditional medicine by various cultures throughout history. Modern research suggests it may have antimicrobial and anti-inflammatory properties.',
    humulene:
        'Humulene is a woody, earthy terpene prominently found in hops and cannabis. It contributes to the distinct aroma of beer and many cannabis strains. Research indicates it may have anti-inflammatory properties and potential appetite-suppressing effects.',
    ocimene:
        'Ocimene is a sweet, herbaceous terpene found in mint, parsley, and orchids. It produces a pleasant, floral aroma with woody undertones. Studies suggest it may have antifungal and anti-inflammatory properties.',
    terpinene:
        "Terpinene is a terpene with a citrusy, woody aroma found in tea tree oil and various citrus fruits. It's often used in the perfume industry for its pleasant scent. Research suggests it may have antioxidant properties.",
    threecarene:
        "Three Carene is a sweet, pungent terpene found in rosemary, cedar, and pine. It's known for its characteristic cypress-like aroma. Studies indicate it may help with bone growth and repair.",
    transnerolidol:
        "Trans Nerolidol is a floral terpene found in jasmine, tea tree, and citrus peels with a subtle, woody scent. It's commonly used in perfumes and flavoring agents. Research suggests it may have sedative and anti-parasitic properties.",
    nerolidol:
        "Nerolidol is a floral terpene found in jasmine, tea tree, and citrus peels with a subtle, woody scent. It's commonly used in perfumes and flavoring agents. Research suggests it may have sedative and anti-parasitic properties.",
    eucalyptol:
        'Eucalyptol, also known as cineole, is the primary terpene found in eucalyptus trees. It has a fresh, minty, and cooling aroma familiar to anyone who has used cough drops. Studies suggest it may have respiratory benefits and anti-inflammatory properties.',
    myrcene:
        "Myrcene is one of the most abundant terpenes in cannabis, with an earthy, musky aroma. It's also found in mangoes, hops, and thyme. Research suggests it may have sedative effects and may enhance the permeability of cell membranes.",
    terpinolene:
        "Terpinolene is a fresh, piney terpene with hints of citrus and floral notes. It's found in sage, rosemary, and many cannabis strains. Studies suggest it may have sedating effects and antioxidant properties.",
    terpineol:
        "Terpineol is a floral terpene with hints of lilac and citrus, commonly found in lime blossoms and eucalyptus sap. It's widely used in perfumes and cosmetics. Research suggests it may have calming and antioxidant properties.",
    alphabisabolol:
        'Alpha Bisabolol is a floral terpene primarily found in chamomile flowers. It has a subtle, sweet floral aroma and is widely used in cosmetics. Studies suggest it may have anti-inflammatory and anti-microbial properties.',
    abisabolol:
        'Alpha Bisabolol is a floral terpene primarily found in chamomile flowers. It has a subtle, sweet floral aroma and is widely used in cosmetics. Studies suggest it may have anti-inflammatory and anti-microbial properties.',
    caryophyllene:
        "Caryophyllene is a spicy, peppery terpene found in black pepper and many herbs. It's unique as it can interact with the endocannabinoid system. Research suggests it may have anti-inflammatory and analgesic properties.",
    betacaryophylleneoxide:
        "Beta Caryophyllene Oxide is the oxidized form of Beta Caryophyllene, with a lightly spicy, woody scent. It's the compound drug-sniffing dogs are trained to detect in cannabis. Studies suggest it may have antifungal and anti-inflammatory properties.",
    bcaryophylleneoxide:
        "Beta Caryophyllene Oxide is the oxidized form of Beta Caryophyllene, with a lightly spicy, woody scent. It's the compound drug-sniffing dogs are trained to detect in cannabis. Studies suggest it may have antifungal and anti-inflammatory properties.",
    pinene: 'Pinene is one of the most abundant terpenes in nature, found in pine needles, rosemary, and sage. It has a fresh, crisp pine needle aroma. Research suggests it may have anti-inflammatory properties and may help improve memory.',
    fenchol:
        "Fenchol is a terpene alcohol with a camphor-like, piney scent found in basil and aster flowers. It's commonly used in perfumery for its fresh, earthy aroma. Studies suggest it may have antimicrobial properties.",
    cedrene:
        'Cedrene is a woody terpene primarily found in cedar wood oil. It has a warm, sweet, woody scent characteristic of cedar trees. Research suggests it may have anti-inflammatory and antiseptic properties.',
    valencene:
        'Valencene is a citrusy terpene naturally occurring in valencia oranges and other citrus fruits. It has a sweet, fresh, citrusy aroma. Studies suggest it may have anti-inflammatory and anti-allergy properties.',
    camphene:
        "Camphene is a terpene with a pungent, earthy aroma similar to camphor and fir needles. It's found in essential oils of numerous plants including ginger. Research suggests it may have cardiovascular benefits.",
    phellandrene:
        "Phellandrene is a terpene with a pepperminty-eucalyptus scent found in various herbs and spices. It's commonly found in eucalyptus and mint plants. Studies suggest it may have anti-inflammatory and pain-relieving properties.",
    geranylacetate:
        "Geranyl Acetate is a terpene with a sweet, floral aroma found in various plants including citronella and lemongrass. It's commonly used in perfumes and flavoring. Research suggests it may have antimicrobial properties.",
    transcaryophyllene:
        'Trans Caryophyllene is a spicy, woody terpene found in black pepper and many herbs. It can interact with the endocannabinoid system like its beta form. Studies suggest it may have anti-inflammatory and analgesic properties.',
    geraniol:
        'Geraniol is a sweet, floral terpene found in geraniums and rose oil. It has a pleasant, rose-like scent and is widely used in perfumes. Research suggests it may have neuroprotective and antioxidant properties.',
    borneol:
        'Borneol is a terpene with a minty, camphor-like aroma found in herbs like rosemary and mint. It has been used in traditional Chinese medicine for centuries. Studies suggest it may have anti-inflammatory and pain-relieving properties.',
    paracymene:
        "Para Cymene is a terpene with a woody, citrusy aroma found in cumin and thyme. It's often used as a flavoring agent in foods. Research suggests it may have antioxidant and anti-inflammatory properties.",
    isopulegol:
        "Isopulegol is a minty, citrusy terpene found in lemongrass and mint species. It's used in the fragrance industry for its fresh aroma. Studies suggest it may have gastroprotective and anxiety-reducing properties.",
    carene: "Carene is a sweet, pungent terpene found in rosemary, cedar, and pine with a cypress-like aroma. It's known for its pleasant woody scent. Research suggests it may help with bone growth and have anti-inflammatory properties.",
    sabinene:
        'Sabinene is a spicy terpene found in black pepper and Norway spruce. It has a woody, spicy, citrusy aroma. Studies suggest it may have antioxidant and anti-inflammatory properties.',
    fenchylalcohol:
        "Fenchyl Alcohol is a terpene alcohol with a camphor-like, piney scent found in fennel and basil. It's used in perfumery for its earthy, woody aroma. Research suggests it may have antimicrobial properties.",
    bpinene:
        'Beta Pinene is a terpene found in pine needles, rosemary, and dill with a fresh, woody aroma. It shares many properties with its isomer Alpha Pinene but has its own unique characteristics. Studies suggest it may have anti-inflammatory and antimicrobial properties.',
};
