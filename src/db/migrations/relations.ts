import { relations } from 'drizzle-orm/relations';
import { brands, products, dispensaries } from '../schema';

export const productsRelations = relations(products, ({ one }) => ({
    brand: one(brands, {
        fields: [products.brandId],
        references: [brands.id],
    }),
    dispensary: one(dispensaries, {
        fields: [products.dispensaryId],
        references: [dispensaries.id],
    }),
}));

export const brandsRelations = relations(brands, ({ many }) => ({
    products: many(products),
}));

export const dispensariesRelations = relations(dispensaries, ({ many }) => ({
    products: many(products),
}));
