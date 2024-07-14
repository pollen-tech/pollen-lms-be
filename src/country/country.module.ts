import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {DatabaseModule} from 'src/database/database.module';
import {CountryController} from './application/controllers/country.controller';
import {CountryService} from './domain/country.service';
import {CountryEntity} from './infrastructure/repositories/country.entity';
import {CountryRepository} from './infrastructure/repositories/country.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      // RegionEntity,
     // SubregionEntity,
      CountryEntity,
      //StateEntity,
     // CityEntity,
    ]),
    DatabaseModule.forCustomRepository([CountryRepository]),
  ],
  providers: [CountryService],
  controllers: [CountryController],
  exports: [TypeOrmModule, CountryService],
})
export class CountryModule {}
