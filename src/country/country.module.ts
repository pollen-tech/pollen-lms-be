import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from 'src/database/database.module';
import { CountryController } from './application/controllers/country.controller';
import { CountryService } from './domain/country.service';
import { CityEntity } from './infrastructure/repositories/city.entity';
import { CityRepository } from './infrastructure/repositories/city.repository';
import { CountryEntity } from './infrastructure/repositories/country.entity';
import { CountryRepository } from './infrastructure/repositories/country.repository';
import { RegionEntity } from './infrastructure/repositories/region.entity';
import { StateEntity } from './infrastructure/repositories/state.entity';
import { SubregionEntity } from './infrastructure/repositories/subregion.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      RegionEntity,
      SubregionEntity,
      CountryEntity,
      StateEntity,
      CityEntity,
    ]),
    DatabaseModule.forCustomRepository([CountryRepository, CityRepository]),
  ],
  providers: [CountryService],
  controllers: [CountryController],
  exports: [TypeOrmModule, CountryService],
})
export class CountryModule {}
