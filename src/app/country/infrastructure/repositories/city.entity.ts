import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { CountryEntity } from './country.entity';
import { StateEntity } from './state.entity';

@Entity('cities')
export class CityEntity {
  @PrimaryColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @ManyToOne((type) => StateEntity, {
    onUpdate: 'RESTRICT',
    onDelete: 'RESTRICT',
    nullable: false,
  })
  @JoinColumn({ name: 'state_id', foreignKeyConstraintName: 'cities_ibfk_1' })
  @Index('idx_16386_cities_test_ibfk_1')
  state: StateEntity;

  @Column()
  state_id: number;

  @Column({ type: 'varchar', length: 255 })
  state_code: string;

  @ManyToOne((type) => CountryEntity, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
    nullable: false,
  })
  @JoinColumn({ name: 'country_id', foreignKeyConstraintName: 'cities_ibfk_2' })
  @Index('idx_16386_cities_test_ibfk_2')
  country: CountryEntity;

  @Column()
  country_id: number;

  @Column({ type: 'character', length: 2 })
  country_code: string;

  @Column({ type: 'numeric', precision: 10, scale: 8 })
  latitude: number;

  @Column({ type: 'numeric', precision: 11, scale: 8 })
  longitude: number;

  @CreateDateColumn({ type: 'timestamptz', nullable: true })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamptz', nullable: true })
  updated_at: Date;

  @Column({ default: true })
  flag: boolean;

  @Column({
    type: 'varchar',
    length: 255,
    comment: 'Rapid API GeoDB Cities',
    nullable: true,
  })
  wikidataid: string;
}
