import {MigrationInterface, QueryRunner} from 'typeorm';

console.log('CurrentTime to append in filename : ' + Date.now())

export class CreateUserTables1720923244086 implements MigrationInterface {
    name = 'CreateUserTables1720923244086';

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.query(
            `CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`,
        );

        await queryRunner.query(
            `
                CREATE TABLE users
                (
                    id             uuid                 DEFAULT uuid_generate_v4() primary key,
                    first_name     varchar(50),
                    last_name      varchar(50),
                    country_code   smallint             default 0,
                    phone_no       int                  default 0,
                    phone_verified boolean     not null DEFAULT false,
                    email          varchar(200),
                    auth_ref_id    varchar(200),
                    auth_id        uuid        not null,
                    channel        varchar(30) not null DEFAULT 'NA',
                    status         varchar(25) not null DEFAULT 'NA',
                    created_at     timestamp   not null DEFAULT now(),
                    updated_at     timestamp   not null DEFAULT now(),
                    deleted_at     timestamp without time zone,
                    createdAt      bigint      NOT NULL,
                    updateAt       bigint      NOT NULL,
                    deletedAt      bigint      NOT NULL,

                    CONSTRAINT uq_auth_id_channel UNIQUE (auth_id, channel)
                );
            `
        )
        ;
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `DROP TABLE auth_user;`,
        );
    }
}
