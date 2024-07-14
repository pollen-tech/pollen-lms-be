import {Injectable,} from '@nestjs/common';
import {CountryRepository} from '../infrastructure/repositories/country.repository';
import {Status} from "../../../common/enums/common.enum";

@Injectable()
export class CountryService {
    constructor(private readonly countryRepository: CountryRepository) {
    }

    countrySelect = {
        status: Status.ACTIVE
    };

    async getActiveCountries() {
        return await this.countryRepository.find({where: {status: Status.ACTIVE}});
    }

}
