import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common'
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

  @Put(':id')
  async updateUser(
    @Param('id') id: string,
    @Body() userData: Prisma.UserUpdateInput,
  ): Promise<UserModel> {
    const foundUser = await this.userService.findOne(id)

    if (!foundUser) {
      throw new Error('Usuário não encontrado')
    }

    return await this.userService.updateUser(id, userData)
  }
}
