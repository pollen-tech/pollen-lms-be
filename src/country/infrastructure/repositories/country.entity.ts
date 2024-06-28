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
import { RegionEntity } from './region.entity';
import { SubregionEntity } from './subregion.entity';

@Entity('countries')
export class CountryEntity {
  @PrimaryColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column({ type: 'character', length: 3, nullable: true })
  iso3: string;

  @Column({ type: 'character', length: 3, nullable: true })
  numeric_code: string;

  @Column({ type: 'character', length: 2, nullable: true })
  iso2: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  phonecode: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  capital: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  currency: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  currency_name: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  currency_symbol: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  tld: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  native: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  region: string;

  @ManyToOne((type) => RegionEntity, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn({
    name: 'region_id',
    foreignKeyConstraintName: 'country_continent_final',
  })
  @Index('idx_16394_country_continent')
  regionEntity: RegionEntity;

  @Column({ nullable: true })
  region_id: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  subregion: string;

  @ManyToOne((type) => SubregionEntity, {
    onUpdate: 'RESTRICT',
    onDelete: 'RESTRICT',
  })
  @JoinColumn({
    name: 'subregion_id',
    foreignKeyConstraintName: 'country_subregion_final',
  })
  @Index('idx_16394_country_subregion')
  subregionEntity: SubregionEntity;

  @Column({ nullable: true })
  subregion_id: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  nationality: string;

  @Column({ type: 'text', nullable: true })
  timezones: string;

  @Column({ type: 'text', nullable: true })
  translations: string;

  @Column({ type: 'numeric', precision: 10, scale: 8, nullable: true })
  latitude: number;

  @Column({ type: 'numeric', precision: 11, scale: 8, nullable: true })
  longitude: number;

  @Column({ type: 'varchar', length: 191, nullable: true })
  emoji: string;

  @Column({ type: 'varchar', length: 191, nullable: true })
  emojiu: string;

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
