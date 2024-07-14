import {Injectable,} from '@nestjs/common';
import {CountryRepository} from '../infrastructure/repositories/country.repository';

@Injectable()
export class CountryService {
  constructor(
    private readonly countryRepository: CountryRepository
  ) { }

  countrySelect = {
    id: true,
    name: true
  };

  async getAllCountries() {
    const countries = await this.countryRepository.find({
      select: this.countrySelect,
    });
    return countries;
  }

}
