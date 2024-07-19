import { Body, Controller, Get, Post } from '@nestjs/common'
import { UserService } from './user.service'
import { Prisma, User as UserModel } from '@prisma/client'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(
    @Body() userData: Prisma.UserCreateInput,
  ): Promise<UserModel> {
    return this.userService.createUser(userData)
  }

  @Get()
  async findAllUsers(): Promise<UserModel[]> {
    return await this.userService.findAll()
  }
}
