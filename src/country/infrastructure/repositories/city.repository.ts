import { CustomRepository } from 'src/database/decorators/custom-repository.decorator';
import BaseRepository from 'src/database/infrastructure/repository/base.repository';
import { CityEntity } from './city.entity';

@CustomRepository(CityEntity)
export class CityRepository extends BaseRepository<CityEntity> { }
