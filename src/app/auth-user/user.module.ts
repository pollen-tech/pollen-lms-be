import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {DatabaseModule} from 'src/database/database.module';
import {UserEntity} from "./repositories/user.entity";
import {UserController} from "./controllers/user.controller";
import {UserService} from "./domain/user.service";
import {UserRepository} from "./repositories/user.repository";

@Module({
    imports: [
        TypeOrmModule.forFeature([
            UserEntity,
        ]),
        DatabaseModule.forCustomRepository([UserRepository]),
    ],
    providers: [UserService],
    controllers: [UserController],
    exports: [TypeOrmModule, UserService],
})
export class UserModule {
}
