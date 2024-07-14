import {Body, Controller, Get, HttpCode, HttpStatus, Post} from '@nestjs/common';
import {ApiTags} from '@nestjs/swagger';
import {Public} from 'nest-keycloak-connect';
import {OnboardCompanyService} from "../domain/onboard.company.service";
import {OnboardCompanyReqDto, OnboardConfig} from "../dto/onboard.dto";

@ApiTags('Onboard-company')
@Controller('onboard-company')
@Public()
export class OnboardController {

    constructor(private readonly onboardCompanyService: OnboardCompanyService) {
    }

    @Get('/index')
    @HttpCode(HttpStatus.OK)
    async helloIndex() {
        return {value: "Hello Onboard Company Index"}
    }

    @Get('/company-type')
    @HttpCode(HttpStatus.OK)
    async getCompanyTypes() {
        return this.onboardCompanyService.getActiveCompanyTypes();
    }

    @Get('/liquidate-unit')
    @HttpCode(HttpStatus.OK)
    async getLiquidateUnit() {
        return this.onboardCompanyService.getActiveLiquidateUnits();
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async createCompany(@Body() request: OnboardCompanyReqDto) {
        return this.onboardCompanyService.onboardNewCompany(request);
    }


}
