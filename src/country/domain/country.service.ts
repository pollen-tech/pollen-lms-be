import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import awaitToError from 'src/common/await-to-error';
import { In } from 'typeorm';
import { CityRepository } from '../infrastructure/repositories/city.repository';
import { CountryRepository } from '../infrastructure/repositories/country.repository';

@Injectable()
export class CountryService {
  constructor(
    private readonly countryRepository: CountryRepository,
    private readonly cityRepository: CityRepository,
  ) { }

  citySelect = {
    id: true,
    name: true,
    state_code: true,
    country_code: true,
    country_id: true,
  };
  countrySelect = {
    id: true,
    name: true,
    emoji: true,
    emojiu: true,
  };

  async getAllCountries() {
    const countries = await this.countryRepository.find({
      select: this.countrySelect,
    });
    return countries;
  }

  async findCitiesByCountry(countryId: number) {
    const cities = await this.cityRepository.find({
      where: { country: { id: countryId } },
      select: this.citySelect,
    });
    return cities;
  }

  async findOneCountryById(id: number) {
    return this.countryRepository.findOneByOrFail({ id });
  }

  async findOneCityById(id: number) {
    return this.cityRepository.findOneByOrFail({ id });
  }

  async findCountriesByIds(ids: number[]) {
    return this.countryRepository.find({ where: { id: In(ids) } });
  }
  async findCitesByIds(ids: number[]) {
    return this.cityRepository.find({ where: { id: In(ids) } });
  }

  async findCountryAndValidate(id: number, cityId?: number) {
    const [err, country] = await awaitToError(this.findOneCountryById(id));
    if (err) {
      throw new NotFoundException(`Country not found`);
    }

    if (cityId) {
      const doesEncompass = await this.cityRepository.existsBy({
        country_id: country.id,
        id: cityId,
      });
      if (!doesEncompass) {
        throw new BadRequestException(`Country does not encompass City`);
      }
    }

    return country;
  }

  async findCityAndValidate(cityId: number, countryId?: number) {
    const [err, city] = await awaitToError(
      this.cityRepository.findOneByOrFail({ id: cityId }),
    );
    if (err) {
      throw new NotFoundException(`City not found`);
    }

    if (countryId && city.country_id !== countryId) {
      throw new BadRequestException(`City is not located within Country`);
    }

    return city;
  }

  async findCurrencyAndValidate(currency: string) {
    const [err, country] = await awaitToError(
      this.countryRepository.findOneByOrFail({ currency: currency }),
    );
    if (err) {
      throw new NotFoundException(`Currency not found`);
    }

    return country.currency;
  }
}
