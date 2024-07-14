import {Column, Entity, PrimaryColumn,} from 'typeorm';

@Entity('company_type')
export class CompanyTypeEntity {

    @PrimaryColumn({type: 'uuid'})
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    status: string;

}
