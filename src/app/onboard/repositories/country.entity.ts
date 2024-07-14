/*
import {Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn,} from 'typeorm';

@Entity('users')
export class UserEntity {

    @PrimaryColumn({type: 'uuid'})
    id: string;

    @Column({length: 50})
    first_name: string;

    @Column({length: 50})
    last_name: string;

    @Column()
    country_code: number;

    @Column()
    phone_no: number;

    @Column({default: false})
    phone_verified: boolean;

    @Column({length: 200})
    email: string;

    @Column()
    auth_ref_id: string;

    @Column({type: 'uuid'})
    auth_id: string;

    @Column()
    channel: string;

    @Column()
    status: string;

    @CreateDateColumn({type: 'timestamptz'})
    created_at: Date;

    @UpdateDateColumn({type: 'timestamptz'})
    updated_at: Date;

}
*/
