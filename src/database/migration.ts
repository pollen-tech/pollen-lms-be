import { NestFactory } from '@nestjs/core';
import { PostgresConfigGetter } from 'src/config/getters/postgres-config.getter';
import { DataSource, DataSourceOptions } from 'typeorm';
import { runSeeders } from 'typeorm-extension';
import { DatabaseModule } from './database.module';
import { getTypeOrmConfig } from './typeorm-config';

export const getTypeOrmInstace = async () => {
  const app = await NestFactory.create(DatabaseModule.forRoot());
  const config = app.get(PostgresConfigGetter);
  const ormConfig = new DataSource(
    getTypeOrmConfig(config) as DataSourceOptions,
  );
  return ormConfig.initialize();
};

export async function runMigrations() {
  const typeorm = await getTypeOrmInstace();
  await typeorm.runMigrations();
}

export async function runSeeds() {
  const typeorm = await getTypeOrmInstace();
  await runSeeders(typeorm);
}

export async function revertMigration() {
  const typeorm = await getTypeOrmInstace();
  await typeorm.undoLastMigration();
}

export const OrmConfig = new DataSource(
  getTypeOrmConfig() as DataSourceOptions,
);
