import { Controller, Get, Param, Body, Post, Put, Delete } from '@nestjs/common';
import { User } from './user.entity'
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private service: UsersService) { }

    @Get()
    getAll(): Promise<User[]> {
        return this.service.getUsers();
    }

    @Get(':id')
    get(@Param() params) {
        return this.service.getUser(params.id)
    }

    @Post()
    create(@Body() user: User): Promise<User>{
        return this.service.createUser(user)
    }

    @Put(':id')
    async update(@Param() param, @Body() user: User) : Promise<any> {
        user.id = param.id;
        return this.service.updateUser(user);
    }

    @Delete(':id')
    async delete(@Param('id') id): Promise<any> {
        return this.service.deleteUser(id)
    }
}
