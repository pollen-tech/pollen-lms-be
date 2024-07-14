import {Controller, Get} from '@nestjs/common';
import {ApiTags} from '@nestjs/swagger';
import {Public} from 'nest-keycloak-connect';
import {OnboardCompanyService} from "../domain/onboard.company.service";
import {OnboardConfig} from "../dto/onboard.dto";

@ApiTags('Onboard-company')
@Controller('onboard-company')
@Public()
export class OnboardController {

    constructor(private readonly onboardCompanyService: OnboardCompanyService) {
    }

    @Get('/index')
    async helloIndex() {
        return {value: "Hello Onboard Company Index"}
    }


    @Get('/config')
    async getConfig() {
        const values = OnboardConfig.getCompanyTypes()
        return values;
    }


}
