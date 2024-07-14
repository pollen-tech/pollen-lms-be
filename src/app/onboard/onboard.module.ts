import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {DatabaseModule} from 'src/database/database.module';
import {OnboardController} from "./controller/onboard.controller";
import {OnboardCompanyService} from "./domain/onboard.company.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([
        ]),
        DatabaseModule.forCustomRepository([]),
    ],
    providers: [OnboardCompanyService],
    controllers: [OnboardController],
    exports: [TypeOrmModule, OnboardCompanyService],
})
export class OnboardModule {
}
