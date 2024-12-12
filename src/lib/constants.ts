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
            {
                name: 'Indica Hybrid',
                value: 'str/indica-hybrid',
            },
            {
                name: 'Sativa Hybrid',
                value: 'str/sativa-hybrid',
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
        name: 'County',
        paramName: 'county',
        options: [
            {
                name: 'Atlantic',
                value: 'county/atlantic',
            },
            {
                name: 'Bergen',
                value: 'county/bergen',
            },
            {
                name: 'Burlington',
                value: 'county/burlington',
            },
            {
                name: 'Camden',
                value: 'county/camden',
            },
            {
                name: 'Cape May',
                value: 'county/cape-may',
            },
            {
                name: 'Cumberland',
                value: 'county/cumberland',
            },
            {
                name: 'Essex',
                value: 'county/essex',
            },
            {
                name: 'Gloucester',
                value: 'county/gloucester',
            },
            {
                name: 'Hudson',
                value: 'county/hudson',
            },
            {
                name: 'Hunterdon',
                value: 'county/hunterdon',
            },
            {
                name: 'Mercer',
                value: 'county/mercer',
            },
            {
                name: 'Middlesex',
                value: 'county/middlesex',
            },
            {
                name: 'Monmouth',
                value: 'county/monmouth',
            },
            {
                name: 'Morris',
                value: 'county/morris',
            },
            {
                name: 'Ocean',
                value: 'county/ocean',
            },
            {
                name: 'Passaic',
                value: 'county/passaic',
            },
            {
                name: 'Salem',
                value: 'county/salem',
            },
            {
                name: 'Somerset',
                value: 'county/somerset',
            },
            {
                name: 'Sussex',
                value: 'county/sussex',
            },
            {
                name: 'Union',
                value: 'county/union',
            },
            {
                name: 'Warren',
                value: 'county/warren',
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
                name: 'Ascend - Wharton',
                value: 'loc/ascend-wharton',
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
            {
                name: 'Dispensary of Union - Union',
                value: 'loc/dispensary#of#union-union',
            },
            {
                name: '1634 Funk - Jersey City',
                value: 'loc/1634#funk-jersey-city',
            },
            {
                name: 'RushBudz Dispensary - South Bound Brook',
                value: 'loc/rushbudz#dispensary-south-bound-brook',
            },
            {
                name: 'Bay Street Greenery - Jersey City',
                value: 'loc/bay#street#greenery-jersey-city',
            },
            {
                name: 'Bleachers - Somerset',
                value: 'loc/bleachers-somerset',
            },
            {
                name: 'Bloc - Somerset',
                value: 'loc/bloc-somerset',
            },
            {
                name: 'Bloc - Waretown',
                value: 'loc/bloc-waretown',
            },
            {
                name: 'Boone Town Provisions - Boonton',
                value: 'loc/boone#town#provisions-boonton',
            },
            {
                name: 'Botera Union - Union',
                value: 'loc/botera#union-union',
            },
            {
                name: 'Breakwater - Cranbury',
                value: 'loc/breakwater-cranbury',
            },
            {
                name: 'Breakwater - Roselle Park',
                value: 'loc/breakwater-roselle-park',
            },
            {
                name: 'Citi Roots - Kingston',
                value: 'loc/citi#roots-kingston',
            },
            {
                name: 'Cookies Harrison - Harrison',
                value: 'loc/cookies#harrison-harrison',
            },
            {
                name: 'Ginger Hale - Oaklyn',
                value: 'loc/ginger#hale-oaklyn',
            },
            {
                name: 'Hashery - Hackensack',
                value: 'loc/hashery-hackensack',
            },
            {
                name: 'High Rollers Dispensary - Atlantic City',
                value: 'loc/high#rollers#dispensary-atlantic-city',
            },
            {
                name: 'Honey Buzz Farms - Atlantic City',
                value: 'loc/honey#buzz#farms-atlantic-city',
            },
            {
                name: 'HudHaus - North Bergen',
                value: 'loc/hudhaus-north-bergen',
            },
            {
                name: 'Island Vibez - Plainfield',
                value: 'loc/island#vibez-plainfield',
            },
            {
                name: 'MPX NJ - Pennsauken',
                value: 'loc/mpx#nj-pennsauken',
            },
            {
                name: 'MPX NJ - Sicklerville',
                value: 'loc/mpx#nj-sicklerville',
            },
            {
                name: 'MPX NJ - Atlantic City',
                value: 'loc/mpx#nj-atlantic-city',
            },
            {
                name: 'Nature’s Motivation - Irvington',
                value: 'loc/nature’s#motivation-irvington',
            },
            {
                name: 'Nirvana - Mount Laurel',
                value: 'loc/nirvana-mount-laurel',
            },
            {
                name: 'NJ Leaf - Freehold',
                value: 'loc/nj#leaf-freehold',
            },
            {
                name: 'NJ Pure - Edgewater Park',
                value: 'loc/nj#pure-edgewater-park',
            },
            {
                name: 'Restore NJ - Glassboro',
                value: 'loc/restore#nj@#llc-glassboro',
            },
            {
                name: 'Rise - Paramus',
                value: 'loc/rise-paramus',
            },
            {
                name: 'Simply Pure Trenton - Ewing',
                value: 'loc/simply#pure#trenton-ewing',
            },
            {
                name: 'Theory Wellness - Trenton',
                value: 'loc/theory#wellness-trenton',
            },
            {
                name: 'Treeotics - Newark',
                value: 'loc/treeotics-newark',
            },
            {
                name: 'Canna Remedies - Ewing',
                value: 'loc/canna#remedies-ewing',
            },
            {
                name: 'Conservatory Cannabis Company - Egg Harbor Township',
                value: 'loc/conservatory#cannabis#company-egg-harbor-twp',
            },
            {
                name: 'Ruuted - Englishtown',
                value: 'loc/ruuted-englishtown',
            },
            {
                name: 'City Leaf - Newark',
                value: 'loc/city#leaf-newark',
            },
            {
                name: 'Pure Natural Vibes - West Orange',
                value: 'loc/pure#natural#vibes-west-orange',
            },
            {
                name: 'Fresh Elizabeth - Elizabeth',
                value: 'loc/fresh#elizabeth-elizabeth',
            },
            {
                name: 'The THC Shop - Atlantic City',
                value: 'loc/the#thc#shop-atlantic-city',
            },
            {
                name: 'BluLight Cannabis - Woodbury Heights',
                value: 'loc/blulight#cannabis-woodbury-heights',
            },
            {
                name: '4Twenty Somewhere - Hewitt',
                value: 'loc/4twenty#somewhere-hewitt',
            },
            {
                name: 'The Frosted Nug - Red Bank',
                value: 'loc/the#frosted#nug-red-bank',
            },
            {
                name: 'Cannavibes - Elmwood Park',
                value: 'loc/cannavibes-elmwood-park',
            },
            {
                name: 'Cottonmouth Dispensary - Runnemede',
                value: 'loc/cottonmouth#dispensary-runnemede',
            },
            {
                name: "Jester's Joint - New Brunswick",
                value: "loc/jester's#joint-new-brunswick",
            },
            {
                name: 'Casa Verde Wellness - Dover',
                value: 'loc/casa#verde#wellness-dover',
            },
            {
                name: 'Andover Cannabis - Andover',
                value: 'loc/andover#cannabis-andover',
            },
            {
                name: 'MMD NJ - Jersey City',
                value: 'loc/mmd#nj-jersey-city',
            },
            {
                name: 'Plantopia - Englishtown',
                value: 'loc/plantopia-englishtown',
            },
            {
                name: 'BestBuds - Woodbury',
                value: 'loc/bestbuds-woodbury',
            },
            {
                name: 'Mountain Dispensary - Vernon',
                value: 'loc/mountain#dispensary-vernon',
            },
            {
                name: 'Uforia - Jersey City',
                value: 'loc/uforia-jersey-city',
            },
            {
                name: 'Releaf Cannabis - Williamstown',
                value: 'loc/releaf#cannabis-williamstown',
            },
            {
                name: 'Feels of Green - Newton',
                value: 'loc/feels#of#green-newton',
            },
            {
                name: 'Hashstoria NJ - Newark',
                value: 'loc/hashstoria#nj-newark',
            },
            {
                name: 'Red Oak Dispensary - Egg Harbor Township',
                value: 'loc/red#oak#dispensary-egg-harbor-twp',
            },
            {
                name: 'Canopy Crossroad - Red Bank',
                value: 'loc/canopy#crossroad-red-bank',
            },
        ],
    },
];

// [
//     {
//       "NAME": "Red Oak Dispensary",
//       "ADDRESS": " 6106 BLACK HORSE PIKE, B1/B2 (https://maps.app.goo.gl/t8APbLkVCcssFJNs9)",
//       "TYPE": "Recreational cannabis only",
//       "TOWN": "EGG HBR TWP",
//       "ZIP_CODE": "08234",
//       "COUNTY": "ATLANTIC",
//       "PHONE_NUMBER": "(609) 681-6211",
//       "WEBSITE": "https://oldroute30dispensary.com/",
//       "GEOCODE": "POINT (-74.609357 39.4331643)"
//     },
//     {
//       "NAME": "Canopy Crossroad",
//       "ADDRESS": "  9 WEST ST (https://maps.app.goo.gl/DSy7ej44mXju5gXg9)",
//       "TYPE": "Recreational cannabis only",
//       "TOWN": "RED BANK",
//       "ZIP_CODE": "07701",
//       "COUNTY": "MONMOUTH",
//       "PHONE_NUMBER": "(732) 438-5880",
//       "WEBSITE": "https://canopycrossroad.com/",
//       "GEOCODE": "POINT (-74.0756362 40.3505671)"
//     },
//     {
//       "NAME": ""
//     }
//   ]

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
        "Beta Caryophyllene is a spicy, woody terpene that uniquely interacts with the body's CB2 receptors. In cannabis, it contributes to relaxing and pain-relieving effects, often found in varieties that help with stress relief and inflammation reduction.",
    limonene:
        'Limonene contributes to uplifting and energizing cannabis effects with its citrusy profile. Often present in varieties that help with mood enhancement, stress relief, and anxiety reduction. Users report feeling more focused and alert.',
    betamyrcene:
        "Beta Myrcene is typically the most abundant terpene in modern cannabis. It's largely responsible for the sedative and relaxing effects, particularly the well-known 'couch-lock' sensation. Higher concentrations tend to produce more sedating effects.",
    bmyrcene:
        "Beta Myrcene is typically the most abundant terpene in modern cannabis. It's largely responsible for the sedative and relaxing effects, particularly the well-known 'couch-lock' sensation. Higher concentrations tend to produce more sedating effects.",
    linalool:
        'Linalool contributes floral, lavender notes to cannabis and enhances its calming and anxiety-reducing properties. It works synergistically with other cannabis compounds to promote relaxation and may help with sleep issues.',
    alphapinene:
        "Alpha Pinene brings fresh, pine-needle notes to cannabis while helping counteract THC's memory-impairing effects. It contributes to alertness and focus, often resulting in a clearer-headed experience.",
    apinene:
        "Alpha Pinene brings fresh, pine-needle notes to cannabis while helping counteract THC's memory-impairing effects. It contributes to alertness and focus, often resulting in a clearer-headed experience.",
    betaeudesmol:
        'Beta Eudesmol contributes to the relaxing effects of cannabis with its woody, earthy profile. Through the entourage effect, it may enhance the therapeutic potential of other cannabis compounds.',
    beudesmol:
        'Beta Eudesmol contributes to the relaxing effects of cannabis with its woody, earthy profile. Through the entourage effect, it may enhance the therapeutic potential of other cannabis compounds.',
    betapinene:
        'Beta Pinene contributes to cannabis varieties that promote alertness and focus. Like its Alpha counterpart, it may help offset short-term memory issues while adding fresh, woody notes to the aroma.',
    bisabolol:
        'Bisabolol adds gentle, floral notes to cannabis and is often found in varieties with pronounced anti-inflammatory effects. It contributes to subtle, soothing sensations and may enhance calming properties.',
    caryophylleneoxide:
        'Caryophyllene Oxide contributes spicy, diesel-like notes to cannabis. It may enhance pain-relieving properties while working synergistically with other compounds to promote therapeutic effects.',
    guaiol: 'Guaiol adds woody, piney notes to cannabis while potentially enhancing therapeutic effects. It works in concert with other compounds to contribute to the overall medicinal properties.',
    humulene:
        'Humulene brings earthy, woody notes to cannabis and is notable for potentially reducing the appetite-stimulating effects often associated with consumption. It may contribute to anti-inflammatory properties.',
    ocimene:
        'Ocimene adds sweet and herbaceous notes to cannabis while contributing to uplifting and energetic effects. Often present in varieties that promote alertness and positive mood.',
    terpinene:
        'Terpinene contributes to complex aromatic profiles in cannabis while potentially enhancing uplifting effects. It adds woody and citrusy notes to the overall experience.',
    threecarene:
        'Three Carene adds sweet, pungent notes to cannabis while potentially contributing to focused, clear-headed effects. It may enhance the absorption of other cannabis compounds.',
    transnerolidol:
        'Trans Nerolidol contributes sweet, floral notes to cannabis while potentially enhancing sedative effects. It may help promote relaxation and restful sleep.',
    nerolidol:
        'Nerolidol contributes sweet, floral notes to cannabis while potentially enhancing sedative effects. It may help promote relaxation and restful sleep.',
    eucalyptol:
        'Eucalyptol brings fresh, minty notes to cannabis while potentially enhancing focus and clarity. It may contribute to more alert, clear-headed effects.',
    myrcene:
        "Myrcene is typically the most abundant terpene in cannabis, responsible for sedative effects and the famous 'couch-lock' sensation. It enhances THC's psychoactive effects and promotes relaxation.",
    terpinolene:
        'Terpinolene contributes complex, multi-layered aromas to cannabis while promoting uplifting effects. Often associated with more energetic and creative experiences.',
    terpineol:
        'Terpineol adds floral, piney notes to cannabis while potentially enhancing relaxing effects. It may contribute to calming properties and stress relief.',
    alphabisabolol:
        'Alpha Bisabolol contributes gentle, floral notes to cannabis while enhancing its soothing properties. Often found in varieties known for their gentle and calming effects.',
    abisabolol:
        'Alpha Bisabolol contributes gentle, floral notes to cannabis while enhancing its soothing properties. Often found in varieties known for their gentle and calming effects.',
    caryophyllene:
        "Caryophyllene is unique as the only terpene known to directly activate cannabinoid receptors. It enhances pain-relieving and anti-anxiety effects while adding spicy notes to cannabis's aroma.",
    betacaryophylleneoxide:
        'Beta Caryophyllene Oxide adds spicy, diesel-like notes to cannabis while potentially enhancing therapeutic effects. It may contribute to pain relief and anti-inflammatory properties.',
    bcaryophylleneoxide:
        'Beta Caryophyllene Oxide adds spicy, diesel-like notes to cannabis while potentially enhancing therapeutic effects. It may contribute to pain relief and anti-inflammatory properties.',
    pinene: "Pinene helps counteract THC's memory-impairing effects while adding fresh, pine-like notes. It contributes to alert, focused effects and may enhance mental clarity during consumption.",
    fenchol:
        'Fenchol contributes earthy, piney notes to cannabis while potentially enhancing therapeutic effects. It may work synergistically with other compounds to promote beneficial properties.',
    cedrene:
        'Cedrene adds woody, earthy notes to cannabis while potentially enhancing calming effects. It may contribute to the sedative properties of certain varieties.',
    valencene:
        'Valencene brings citrusy notes to cannabis while contributing to uplifting and energetic effects. Often associated with mood enhancement and alertness.',
    camphene:
        'Camphene adds earthy, piney notes to cannabis while potentially enhancing therapeutic properties. It may contribute to the overall medicinal benefits of certain varieties.',
    phellandrene:
        'Phellandrene contributes to complex aromatic profiles while potentially enhancing energizing effects. It may promote alertness and focus during consumption.',
    geranylacetate:
        'Geranyl Acetate adds sweet, floral notes to cannabis while potentially enhancing therapeutic effects. It may contribute to the overall beneficial properties.',
    transcaryophyllene:
        'Trans Caryophyllene can interact with cannabinoid receptors, potentially enhancing pain-relieving effects while adding spicy notes to cannabis.',
    geraniol:
        'Geraniol brings sweet, floral notes to cannabis while potentially enhancing therapeutic properties. It may contribute to the overall beneficial effects.',
    borneol:
        'Borneol adds earthy, menthol-like notes to cannabis while potentially enhancing calming effects. It may contribute to relaxation and stress relief.',
    paracymene:
        'Para Cymene contributes to complex aromatic profiles while working synergistically with other compounds to enhance therapeutic effects in cannabis.',
    isopulegol:
        'Isopulegol adds minty, citrusy notes to cannabis while potentially enhancing anxiety-reducing effects. It may contribute to stress relief and relaxation.',
    carene: 'Carene brings sweet, pungent notes to cannabis while potentially enhancing focused effects. It may contribute to mental clarity during consumption.',
    sabinene:
        'Sabinene contributes to complex aromatic profiles while working synergistically with other compounds to enhance the therapeutic potential of cannabis.',
    fenchylalcohol:
        'Fenchyl Alcohol adds earthy, piney notes to cannabis while potentially enhancing therapeutic properties. It may contribute to the overall beneficial effects.',
    bpinene:
        'Beta Pinene contributes to alert, focused effects while adding fresh, woody notes. Like Alpha Pinene, it may help offset short-term memory issues during cannabis consumption.',
};

export const CANNABINOIDS_MAP = {
    cbda: 'CBDa',
    cbg: 'CBG',
    cbga: 'CBGA',
    thca: 'THCa',
    thcva: 'THCVA',
    cbc: 'CBC',
    cbna: 'CBNA',
    cbdva: 'CBDVA',
    cbca: 'CBCA',
    cbl: 'CBL',
    cbn: 'CBN',
    thcv: 'THCV',
    cbdv: 'CBDV',
    thc9: 'THC9',
    thcd9: 'THC-D9',
};

export const CANNABINOIDS_FULL_NAME_MAP = {
    cbda: 'Cannabidiolic Acid',
    cbg: 'Cannabigerol',
    cbga: 'Cannabigerolic Acid',
    thca: 'Tetrahydrocannabinolic Acid',
    thcva: 'Tetrahydrocannabivarinic Acid',
    cbc: 'Cannabichromene',
    cbna: 'Cannabinolic Acid',
    cbdva: 'Cannabidivarinic Acid',
    cbca: 'Cannabichromenic Acid',
    cbl: 'Cannabicyclol',
    cbn: 'Cannabinol',
    thcv: 'Tetrahydrocannabivarin',
    cbdv: 'Cannabidivarin',
    thc9: 'Delta-9-Tetrahydrocannabinol',
    thcd9: 'Delta-9-Tetrahydrocannabinol',
};

export const CANNABINOIDS_INFO_MAP = {
    cbda: 'CBDa is the acidic precursor to CBD. It has potential anti-inflammatory and anti-nausea properties, and may help with pain relief without psychoactive effects.',
    cbg: 'CBG is known as the "mother cannabinoid" as other cannabinoids are derived from its acidic form. It may have anti-inflammatory, neuroprotective, and appetite-stimulating properties.',
    cbga: 'CBGA is the acidic precursor to CBG and the foundation for many other cannabinoids. It has potential therapeutic properties but requires more research.',
    thca: 'THCa is the non-psychoactive, acidic precursor to THC. It has potential anti-inflammatory and neuroprotective properties before decarboxylation.',
    thcva: 'THCVa is the acidic form of THCV. It may have unique therapeutic properties but requires more research to fully understand its effects.',
    cbc: 'CBC is a non-psychoactive cannabinoid that may have anti-inflammatory and pain-relieving properties. It often works synergistically with other cannabinoids.',
    cbna: 'CBNa is the acidic precursor to CBN. It forms naturally as THCa oxidizes and may contribute to sedative effects.',
    cbdva: 'CBDVa is the acidic precursor to CBDV. It shows promise in research for neurological conditions but requires further study.',
    cbca: 'CBCa is the acidic precursor to CBC. It may have unique therapeutic properties but requires more research to understand its full potential.',
    cbl: 'CBL is a lesser-known cannabinoid formed from CBC degradation. Its therapeutic potential is still being researched.',
    cbn: "CBN is formed from THC degradation and may have sedative properties. It's often associated with helping improve sleep quality.",
    thcv: 'THCV is similar to THC but may have different effects, including potential appetite suppression. At higher doses, it can be psychoactive.',
    cbdv: "CBDV is similar in structure to CBD and shows promise in neurological research. It's non-psychoactive and may have anticonvulsant properties.",
    thc9: 'Delta-9-THC is the primary psychoactive compound in cannabis. It can produce euphoria while potentially helping with pain, nausea, and appetite stimulation.',
    thcd9: 'Delta-9-THC is the primary psychoactive compound in cannabis. It can produce euphoria while potentially helping with pain, nausea, and appetite stimulation.',
};
