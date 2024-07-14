import {CustomRepository} from 'src/database/decorators/custom-repository.decorator';
import BaseRepository from 'src/database/infrastructure/repository/base.repository';
import {CompanyEntity} from "./company.entity";

@CustomRepository(CompanyEntity)
export class CompanyRepository extends BaseRepository<CompanyEntity> { }
