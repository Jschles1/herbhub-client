import {
    pgTable,
    uuid,
    text,
    index,
    boolean,
    foreignKey,
    numeric,
    integer,
    jsonb,
} from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm';

export const lastUpdated = pgTable('last_updated', {
    id: uuid().defaultRandom().primaryKey().notNull(),
    date: text().notNull(),
});

export const brands = pgTable(
    'brands',
    {
        id: uuid().defaultRandom().primaryKey().notNull(),
        name: text().notNull(),
        value: text().notNull(),
    },
    (table) => {
        return {
            idxBrandsName: index('idx_brands_name').using(
                'btree',
                table.name.asc().nullsLast().op('text_ops'),
            ),
            idxBrandsValue: index('idx_brands_value').using(
                'btree',
                table.value.asc().nullsLast().op('text_ops'),
            ),
        };
    },
);

export const dispensaries = pgTable(
    'dispensaries',
    {
        id: uuid().defaultRandom().primaryKey().notNull(),
        name: text().notNull(),
        location: text().notNull(),
        address: text().notNull(),
        zipCode: text('zip_code').notNull(),
        phoneNumber: text('phone_number').notNull(),
        type: text().notNull(),
        placeId: text('place_id').notNull(),
        openingHours: text('opening_hours').array().notNull(),
        formattedPhoneNumber: text('formatted_phone_number').notNull(),
        internationalPhoneNumber: text('international_phone_number').notNull(),
        wheelchairAccessible: boolean('wheelchair_accessible').notNull(),
        fullAddress: text('full_address').notNull(),
        url: text().notNull(),
        geocode: text().notNull(),
        googleMapsUrl: text('google_maps_url').notNull(),
    },
    (table) => {
        return {
            idxDispensariesLocation: index('idx_dispensaries_location').using(
                'btree',
                table.location.asc().nullsLast().op('text_ops'),
            ),
            idxDispensariesName: index('idx_dispensaries_name').using(
                'btree',
                table.name.asc().nullsLast().op('text_ops'),
            ),
            idxDispensariesPlaceId: index('idx_dispensaries_place_id').using(
                'btree',
                table.placeId.asc().nullsLast().op('text_ops'),
            ),
            idxDispensariesType: index('idx_dispensaries_type').using(
                'btree',
                table.type.asc().nullsLast().op('text_ops'),
            ),
            idxDispensariesZipCode: index('idx_dispensaries_zip_code').using(
                'btree',
                table.zipCode.asc().nullsLast().op('text_ops'),
            ),
        };
    },
);

export const imageHashes = pgTable(
    'image_hashes',
    {
        id: uuid().defaultRandom().primaryKey().notNull(),
        hash: text().notNull(),
        imageUrl: text('image_url').notNull(),
    },
    (table) => {
        return {
            idxImageHashesHash: index('idx_image_hashes_hash').using(
                'btree',
                table.hash.asc().nullsLast().op('text_ops'),
            ),
        };
    },
);

export const products = pgTable(
    'products',
    {
        id: uuid().defaultRandom().primaryKey().notNull(),
        brandId: uuid('brand_id'),
        dispensaryId: uuid('dispensary_id').notNull(),
        subcategoryType: text('subcategory_type'),
        categoryType: text('category_type').notNull(),
        description: text(),
        image: text(),
        weight: numeric(),
        normalPrice: numeric('normal_price').notNull(),
        promoPrice: numeric('promo_price'),
        unit: text().notNull(),
        quantity: integer(),
        strain: text().notNull(),
        strainType: text('strain_type').notNull(),
        url: text().notNull(),
        lastSold: text('last_sold'),
        thcPercent: numeric('thc_percent'),
        cbdPercent: numeric('cbd_percent'),
        thcContent: numeric('thc_content'),
        cbdContent: numeric('cbd_content'),
        menuType: text('menu_type').notNull(),
        terpenes: jsonb(),
        includedTerpenes: text('included_terpenes').notNull(),
        cannabinoids: jsonb(),
        includedCannabinoids: text('included_cannabinoids').notNull(),
        lowestPrice: numeric('lowest_price').notNull(),
    },
    (table) => {
        return {
            idxProductsBrandId: index('idx_products_brand_id').using(
                'btree',
                table.brandId.asc().nullsLast().op('uuid_ops'),
            ),
            idxProductsCategoryType: index('idx_products_category_type').using(
                'btree',
                table.categoryType.asc().nullsLast().op('text_ops'),
            ),
            idxProductsDispensaryId: index('idx_products_dispensary_id').using(
                'btree',
                table.dispensaryId.asc().nullsLast().op('uuid_ops'),
            ),
            idxProductsMenuType: index('idx_products_menu_type').using(
                'btree',
                table.menuType.asc().nullsLast().op('text_ops'),
            ),
            idxProductsNormalPrice: index('idx_products_normal_price').using(
                'btree',
                table.normalPrice.asc().nullsLast().op('numeric_ops'),
            ),
            idxProductsStrain: index('idx_products_strain').using(
                'btree',
                table.strain.asc().nullsLast().op('text_ops'),
            ),
            idxProductsStrainType: index('idx_products_strain_type').using(
                'btree',
                table.strainType.asc().nullsLast().op('text_ops'),
            ),
            productsBrandIdBrandsIdFk: foreignKey({
                columns: [table.brandId],
                foreignColumns: [brands.id],
                name: 'products_brand_id_brands_id_fk',
            }),
            productsDispensaryIdDispensariesIdFk: foreignKey({
                columns: [table.dispensaryId],
                foreignColumns: [dispensaries.id],
                name: 'products_dispensary_id_dispensaries_id_fk',
            }),
        };
    },
);
