import {Column, Entity, PrimaryColumn,} from 'typeorm';

@Entity('liquidate_unit')
export class LiquidateUnitEntity {

    @PrimaryColumn({type: 'uuid'})
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    status: string;

}
