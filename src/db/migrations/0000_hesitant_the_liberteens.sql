-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE IF NOT EXISTS "last_updated" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"date" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "brands" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"value" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "dispensaries" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"location" text NOT NULL,
	"address" text NOT NULL,
	"zip_code" text NOT NULL,
	"phone_number" text NOT NULL,
	"type" text NOT NULL,
	"place_id" text NOT NULL,
	"opening_hours" text[] NOT NULL,
	"formatted_phone_number" text NOT NULL,
	"international_phone_number" text NOT NULL,
	"wheelchair_accessible" boolean NOT NULL,
	"full_address" text NOT NULL,
	"url" text NOT NULL,
	"geocode" text NOT NULL,
	"google_maps_url" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "image_hashes" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"hash" text NOT NULL,
	"image_url" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "products" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"brand_id" uuid,
	"dispensary_id" uuid NOT NULL,
	"subcategory_type" text,
	"category_type" text NOT NULL,
	"description" text,
	"image" text,
	"weight" numeric,
	"normal_price" numeric NOT NULL,
	"promo_price" numeric,
	"unit" text NOT NULL,
	"quantity" integer,
	"strain" text NOT NULL,
	"strain_type" text NOT NULL,
	"url" text NOT NULL,
	"last_sold" text,
	"thc_percent" numeric,
	"cbd_percent" numeric,
	"thc_content" numeric,
	"cbd_content" numeric,
	"menu_type" text NOT NULL,
	"terpenes" jsonb,
	"included_terpenes" text NOT NULL,
	"cannabinoids" jsonb,
	"included_cannabinoids" text NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "products" ADD CONSTRAINT "products_brand_id_brands_id_fk" FOREIGN KEY ("brand_id") REFERENCES "public"."brands"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "products" ADD CONSTRAINT "products_dispensary_id_dispensaries_id_fk" FOREIGN KEY ("dispensary_id") REFERENCES "public"."dispensaries"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_brands_name" ON "brands" USING btree ("name" text_ops);--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_brands_value" ON "brands" USING btree ("value" text_ops);--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_dispensaries_location" ON "dispensaries" USING btree ("location" text_ops);--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_dispensaries_name" ON "dispensaries" USING btree ("name" text_ops);--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_dispensaries_place_id" ON "dispensaries" USING btree ("place_id" text_ops);--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_dispensaries_type" ON "dispensaries" USING btree ("type" text_ops);--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_dispensaries_zip_code" ON "dispensaries" USING btree ("zip_code" text_ops);--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_image_hashes_hash" ON "image_hashes" USING btree ("hash" text_ops);--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_products_brand_id" ON "products" USING btree ("brand_id" uuid_ops);--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_products_category_type" ON "products" USING btree ("category_type" text_ops);--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_products_dispensary_id" ON "products" USING btree ("dispensary_id" uuid_ops);--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_products_menu_type" ON "products" USING btree ("menu_type" text_ops);--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_products_normal_price" ON "products" USING btree ("normal_price" numeric_ops);--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_products_strain" ON "products" USING btree ("strain" text_ops);--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_products_strain_type" ON "products" USING btree ("strain_type" text_ops);
*/