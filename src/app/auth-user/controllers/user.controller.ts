import {Controller, Get, Param} from '@nestjs/common';
import {ApiTags} from '@nestjs/swagger';
import {Public} from 'nest-keycloak-connect';
import {UserService} from "../domain/user.service";
import {SingleNumberIdDto} from "../../../common/dtos/id.dto";

@ApiTags('Users')
@Controller('users')
@Public()
export class UserController {

    constructor(private readonly userService: UserService) {
    }

    @Get('/index')
    async helloIndex() {
        return {value: "Hello Index"}
    }

    @Get(':user_id')
    async findByUserId(@Param() user_id: string) {
        return this.userService.findOneById(user_id);
    }

}
