import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Body,
    Param,
} from '@nestjs/common';
import { User } from './user.entity';
import {UsersService} from './users.service'

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Get()
    findAll(): Promise<User[]> {
        return this.usersService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<User> {
        return this.usersService.findOne(id);
    }

    @Post()
    create(@Body() user: User): Promise<User> {
        return this.usersService.create(user);
    }

    @Delete(':id')
    delete(@Param('id') id: string): Promise<User | string> {
        return this.usersService.delete(id);
    }

    @Put(':id')
    update(@Body() user: User, @Param('id') id: string): Promise<User | string> {
        return this.usersService.update(id, user);
    }
}
