import {Injectable,} from '@nestjs/common';
import {OnboardCompanyMapper, OnboardCompanyReqDto, OnboardCompanyResDto} from "../dto/onboard.dto";
import {CompanyRepository} from "../repositories/company.repository";
import {Status} from "../../../common/enums/common.enum";
import {CompanyUserRepository} from "../repositories/company.user.repository";
import {LiquidateUnitRepository} from "../repositories/liquidate.unit.repository";
import {CompanyTypeRepository} from "../repositories/company.type.repository";
import {CompanyTypeEntity} from "../repositories/company.type.entity";
import {LiquidateUnitEntity} from "../repositories/liquidate.unit.entity";

@Injectable()
export class OnboardCompanyService {

    constructor(private companyRepository: CompanyRepository,
                private companyTypeRepository: CompanyTypeRepository,
                private companyUserRepository: CompanyUserRepository,
                private liquidateUnitRepository: LiquidateUnitRepository
    ) {
    }

    async findOneById(id: string) {
        return "Helo";
    }

    async getActiveLiquidateUnits(): Promise<LiquidateUnitEntity[]> {
        return await this.liquidateUnitRepository.find({where: {status: Status.ACTIVE}})
    }

    async getActiveCompanyTypes(): Promise<CompanyTypeEntity[]> {
        return await this.companyTypeRepository.find({where: {status: Status.ACTIVE}})
    }

    async onboardNewCompany(reqDto: OnboardCompanyReqDto) {
        let savedCompany = await this.createCompany(reqDto);
        await this.createCompanyUser(savedCompany.id, reqDto.user_id);
        return savedCompany;
    }

    async createCompany(reqDto: OnboardCompanyReqDto): Promise<OnboardCompanyResDto> {
        const entity = OnboardCompanyMapper.toCompanyEntity(reqDto);
        const saved = await this.companyRepository.save(entity);
        let res = {...reqDto};
        res.id = saved.id;
        return res;
    }

    async createCompanyUser(company_id: string, user_id: string) {
        let entity = {status: Status.ACTIVE, company_id, user_id,};
        const saved = await this.companyUserRepository.save(entity);
        return saved;
    }
}
