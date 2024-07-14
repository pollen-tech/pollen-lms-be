import {Injectable,} from '@nestjs/common';
import {UserRepository} from "../../auth-user/repositories/user.repository";

@Injectable()
export class OnboardCompanyService {

    constructor(  ) {
    }

    async findOneById(id: string) {
        return "Helo";
    }
}
