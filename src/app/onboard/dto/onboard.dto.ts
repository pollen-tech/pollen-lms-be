import {IsNotEmpty} from "class-validator";
import {CompanyEntity} from "../repositories/company.entity";
import {Optional} from "@nestjs/common";
import {Status} from "../../../common/enums/common.enum";

export class OnboardCompanyReqDto {

    id: string;

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    company_type_id: string;

    @IsNotEmpty()
    operation_country_id: number;

    @Optional()
    operation_country_name: string;

    @IsNotEmpty()
    liquidate_unit_id: number;

    @Optional()
    liquidate_unit_name: string;

    @Optional()
    logo: string;

    @IsNotEmpty()
    user_id: string;

}

export class OnboardCompanyResDto extends OnboardCompanyReqDto {
    id: string;
}

export class OnboardCompanyMapper {

    static toCompanyEntity(req: OnboardCompanyReqDto) {
        const entity = new CompanyEntity();
        entity.id = req.id;
        entity.name = req.name;
        entity.company_type_id = req.company_type_id;
        entity.country_id = req.operation_country_id;
        entity.liquidate_unit_id = req.liquidate_unit_id
        entity.status = Status.ACTIVE;
        return entity;
    }
}


export class OnboardConfig {

    static getCompanyTypes() {
        let values: any;
        values = [];
        values.push(new CompanyType().set('PRINCIPAL', 'Principal', 'Principal Or Branch Owner'));
        values.push(new CompanyType().set('FACTORY_FACILITY', 'FACTORY_FACILITY', ''));
        values.push(new CompanyType().set('DISTRIBUTOR', 'Distributor/Wholesaler', ''));
        values.push(new CompanyType().set('AGENT', 'Agent', ''));
        values.push(new CompanyType().set('LOGISTIC', 'Logistic', ''));
        values.push(new CompanyType().set('RETAILER', 'Retailer', ''));
        return values;
    }

}

class CompanyType {
    code: string;
    value: string;
    desc: string;

    set(code, value, desc) {
        this.code = code;
        this.value = value;
        this.desc = desc;
        return this;
    }
}