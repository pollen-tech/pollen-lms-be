import {Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn,} from 'typeorm';

@Entity('company')
export class CompanyEntity {

    @PrimaryColumn({type: 'uuid'})
    id: string;

    @Column()
    name: string;

    @Column({type: 'uuid'})
    company_type_id: string;

    @Column()
    country_id: number;

    @Column()
    liquidate_unit_id: number;

    @Column()
    status: string;

    @CreateDateColumn({type: 'timestamptz'})
    created_at: Date;

    @UpdateDateColumn({type: 'timestamptz'})
    updated_at: Date;

}
