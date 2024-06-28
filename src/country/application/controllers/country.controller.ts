import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Public } from 'nest-keycloak-connect';
import { SingleNumberIdDto } from 'src/common/dtos/id.dto';
import { CountryService } from 'src/country/domain/country.service';

@ApiTags('Country')
@Controller('countries')
@Public()
export class CountryController {
  constructor(private readonly countryService: CountryService) { }

  @Get()
  async getAllCountries() {
    return this.countryService.getAllCountries();
  }

  @Get(':id/cities')
  async findAllCities(@Param() param: SingleNumberIdDto) {
    return this.countryService.findCitiesByCountry(param.id);
  }
}
