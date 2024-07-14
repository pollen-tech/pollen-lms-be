import {Controller, Get} from '@nestjs/common';
import {ApiTags} from '@nestjs/swagger';
import {Public} from 'nest-keycloak-connect';
import {CountryService} from 'src/app/country/domain/country.service';

@ApiTags('Country')
@Controller('countries')
@Public()
export class CountryController {
  constructor(private readonly countryService: CountryService) { }

  @Get()
  async getAllCountries() {
    return this.countryService.getAllCountries();
  }

}
