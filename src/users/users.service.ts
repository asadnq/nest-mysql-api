import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { User } from './user.entity';


@Injectable()
export class UsersService {

    constructor(@InjectRepository(User) private usersRepository: Repository<User>) {

    }

    async getUsers(): Promise<User[]> {
        return await this.usersRepository.find();
    }

    async getUser(_id: number): Promise<User[]> {
        return await this.usersRepository.find({
            select: ['fullname', 'birthday', 'isActive'],
            where: [{'id': _id}]
        })
    }

    async createUser(user: User): Promise<User> {
        return await this.usersRepository.save(user);
    }

    async updateUser(user: User): Promise<UpdateResult> {
        return await this.usersRepository.update(user.id, user)
    }

    async deleteUser(user: User): Promise<DeleteResult> {
        return await this.usersRepository.delete(user)
    }
}
