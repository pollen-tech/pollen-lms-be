import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateCountryModuleTables1719559010448
  implements MigrationInterface
{
  name = 'CreateCountryModuleTables1719559010448';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "regions" ("id" integer NOT NULL, "name" character varying(100) NOT NULL, "translations" text, "created_at" TIMESTAMP WITH TIME ZONE DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE DEFAULT now(), "flag" boolean NOT NULL DEFAULT true, "wikidataid" character varying(255), CONSTRAINT "PK_4fcd12ed6a046276e2deb08801c" PRIMARY KEY ("id")); COMMENT ON COLUMN "regions"."wikidataid" IS 'Rapid API GeoDB Cities'`,
    );
    await queryRunner.query(
      `CREATE TABLE "subregions" ("id" integer NOT NULL, "name" character varying(100) NOT NULL, "translations" text, "region_id" integer NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE DEFAULT now(), "flag" boolean NOT NULL DEFAULT true, "wikidataid" character varying(255), CONSTRAINT "PK_46f1f54bc9fdaedea223127924d" PRIMARY KEY ("id")); COMMENT ON COLUMN "subregions"."wikidataid" IS 'Rapid API GeoDB Cities'`,
    );
    await queryRunner.query(
      `CREATE INDEX "idx_16418_subregion_continent" ON "subregions" ("region_id") `,
    );
    await queryRunner.query(
      `CREATE TABLE "countries" ("id" integer NOT NULL, "name" character varying(100) NOT NULL, "iso3" character(3), "numeric_code" character(3), "iso2" character(2), "phonecode" character varying(255), "capital" character varying(255), "currency" character varying(255), "currency_name" character varying(255), "currency_symbol" character varying(255), "tld" character varying(255), "native" character varying(255), "region" character varying(255), "region_id" integer, "subregion" character varying(255), "subregion_id" integer, "nationality" character varying(255), "timezones" text, "translations" text, "latitude" numeric(10,8), "longitude" numeric(11,8), "emoji" character varying(191), "emojiu" character varying(191), "created_at" TIMESTAMP WITH TIME ZONE DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE DEFAULT now(), "flag" boolean NOT NULL DEFAULT true, "wikidataid" character varying(255), CONSTRAINT "PK_b2d7006793e8697ab3ae2deff18" PRIMARY KEY ("id")); COMMENT ON COLUMN "countries"."wikidataid" IS 'Rapid API GeoDB Cities'`,
    );
    await queryRunner.query(
      `CREATE INDEX "idx_16394_country_continent" ON "countries" ("region_id") `,
    );
    await queryRunner.query(
      `CREATE INDEX "idx_16394_country_subregion" ON "countries" ("subregion_id") `,
    );
    await queryRunner.query(
      `CREATE TABLE "states" ("id" integer NOT NULL, "name" character varying(255) NOT NULL, "country_id" integer NOT NULL, "country_code" character(2) NOT NULL, "fips_code" character varying(255), "iso2" character varying(255), "type" character varying(191), "latitude" numeric(10,8), "longitude" numeric(11,8), "created_at" TIMESTAMP WITH TIME ZONE DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE DEFAULT now(), "flag" boolean NOT NULL DEFAULT true, "wikidataid" character varying(255), CONSTRAINT "PK_09ab30ca0975c02656483265f4f" PRIMARY KEY ("id")); COMMENT ON COLUMN "states"."wikidataid" IS 'Rapid API GeoDB Cities'`,
    );
    await queryRunner.query(
      `CREATE INDEX "idx_16410_country_region" ON "states" ("country_id") `,
    );
    await queryRunner.query(
      `CREATE TABLE "cities" ("id" integer NOT NULL, "name" character varying(255) NOT NULL, "state_id" integer NOT NULL, "state_code" character varying(255) NOT NULL, "country_id" integer NOT NULL, "country_code" character(2) NOT NULL, "latitude" numeric(10,8) NOT NULL, "longitude" numeric(11,8) NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE DEFAULT now(), "flag" boolean NOT NULL DEFAULT true, "wikidataid" character varying(255), CONSTRAINT "PK_4762ffb6e5d198cfec5606bc11e" PRIMARY KEY ("id")); COMMENT ON COLUMN "cities"."wikidataid" IS 'Rapid API GeoDB Cities'`,
    );
    await queryRunner.query(
      `CREATE INDEX "idx_16386_cities_test_ibfk_1" ON "cities" ("state_id") `,
    );
    await queryRunner.query(
      `CREATE INDEX "idx_16386_cities_test_ibfk_2" ON "cities" ("country_id") `,
    );
    await queryRunner.query(
      `ALTER TABLE "subregions" ADD CONSTRAINT "subregion_continent_final" FOREIGN KEY ("region_id") REFERENCES "regions"("id") ON DELETE RESTRICT ON UPDATE RESTRICT`,
    );
    await queryRunner.query(
      `ALTER TABLE "countries" ADD CONSTRAINT "country_continent_final" FOREIGN KEY ("region_id") REFERENCES "regions"("id") ON DELETE RESTRICT ON UPDATE RESTRICT`,
    );
    await queryRunner.query(
      `ALTER TABLE "countries" ADD CONSTRAINT "country_subregion_final" FOREIGN KEY ("subregion_id") REFERENCES "subregions"("id") ON DELETE RESTRICT ON UPDATE RESTRICT`,
    );
    await queryRunner.query(
      `ALTER TABLE "states" ADD CONSTRAINT "country_region_final" FOREIGN KEY ("country_id") REFERENCES "countries"("id") ON DELETE RESTRICT ON UPDATE RESTRICT`,
    );
    await queryRunner.query(
      `ALTER TABLE "cities" ADD CONSTRAINT "cities_ibfk_1" FOREIGN KEY ("state_id") REFERENCES "states"("id") ON DELETE RESTRICT ON UPDATE RESTRICT`,
    );
    await queryRunner.query(
      `ALTER TABLE "cities" ADD CONSTRAINT "cities_ibfk_2" FOREIGN KEY ("country_id") REFERENCES "countries"("id") ON DELETE RESTRICT ON UPDATE RESTRICT`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "cities" DROP CONSTRAINT "cities_ibfk_2"`,
    );
    await queryRunner.query(
      `ALTER TABLE "cities" DROP CONSTRAINT "cities_ibfk_1"`,
    );
    await queryRunner.query(
      `ALTER TABLE "states" DROP CONSTRAINT "country_region_final"`,
    );
    await queryRunner.query(
      `ALTER TABLE "countries" DROP CONSTRAINT "country_subregion_final"`,
    );
    await queryRunner.query(
      `ALTER TABLE "countries" DROP CONSTRAINT "country_continent_final"`,
    );
    await queryRunner.query(
      `ALTER TABLE "subregions" DROP CONSTRAINT "subregion_continent_final"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."idx_16386_cities_test_ibfk_2"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."idx_16386_cities_test_ibfk_1"`,
    );
    await queryRunner.query(`DROP TABLE "cities"`);
    await queryRunner.query(`DROP INDEX "public"."idx_16410_country_region"`);
    await queryRunner.query(`DROP TABLE "states"`);
    await queryRunner.query(
      `DROP INDEX "public"."idx_16394_country_subregion"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."idx_16394_country_continent"`,
    );
    await queryRunner.query(`DROP TABLE "countries"`);
    await queryRunner.query(
      `DROP INDEX "public"."idx_16418_subregion_continent"`,
    );
    await queryRunner.query(`DROP TABLE "subregions"`);
    await queryRunner.query(`DROP TABLE "regions"`);
  }
}
