import {CustomRepository} from 'src/database/decorators/custom-repository.decorator';
import BaseRepository from 'src/database/infrastructure/repository/base.repository';
import {UserEntity} from "./user.entity";

@CustomRepository(UserEntity)
export class UserRepository extends BaseRepository<UserEntity> { }
