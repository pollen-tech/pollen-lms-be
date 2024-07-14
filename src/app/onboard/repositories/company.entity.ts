import {Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn,} from 'typeorm';
import {Status} from "../../../common/enums/common.enum";

@Entity('company')
export class CompanyEntity {

    @PrimaryColumn({type: 'uuid'})
    id: string;

    @Column()
    name: string;

    @Column()
    company_type_id: number;

    @Column()
    country_id: number;

    @Column()
    liquidate_unit_id: number;

    @Column()
    status: Status;

    @CreateDateColumn({type: 'timestamptz'})
    created_at: Date;

    @UpdateDateColumn({type: 'timestamptz'})
    updated_at: Date;

}
