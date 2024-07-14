import {Injectable,} from '@nestjs/common';
import {In} from 'typeorm';
import {CityRepository} from '../infrastructure/repositories/city.repository';
import {CountryRepository} from '../infrastructure/repositories/country.repository';

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

}
