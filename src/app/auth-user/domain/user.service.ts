import {Injectable,} from '@nestjs/common';
import {UserRepository} from "../repositories/user.repository";

@Injectable()
export class UserService {
    constructor(
        private readonly userRepository: UserRepository,
    ) {
    }

    async findOneById(id: string) {
        return this.userRepository.findOneByOrFail({id: id});
    }


}
