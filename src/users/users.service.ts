import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Connection } from 'typeorm';
import { User } from './user.entity';
@Injectable()
export class UsersService {
    constructor(
        private connection: Connection,
        @InjectRepository(User) private usersRepository: Repository<User>,
    ) {}

    async findAll(): Promise<User[]> {
        return await this.usersRepository.find();
    }

    async findOne(id: string): Promise<User> {
        return await this.usersRepository.findOne(id);
    }

    async create(user: User): Promise<User> {
        return this.usersRepository.save(user)
    }

    async delete(id: string): Promise<string> {
        await this.usersRepository.delete(id);
        return 'deleted successfuly'
    }

    async update(id: string, user: User): Promise<string> {
        await this.usersRepository.update(id, user);
        return 'updated successfuly'
    }
}
