import {IsArray, IsNotEmpty, IsUUID} from "class-validator";

export class OnboardCompanyDto {

    @IsNotEmpty()
    id: string;

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    type: string;

    @IsNotEmpty()
    operation_country: string;

    @IsNotEmpty()
    liquidate_monthly: string;

    @IsNotEmpty()
    logo: string;

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