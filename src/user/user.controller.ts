import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common'
import { UserService } from './user.service'
import { Prisma, User as UserModel } from '@prisma/client'
import { AuthGuard } from 'src/guards/auth.guard'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async signupUser(
    @Body() userData: Prisma.UserCreateInput,
  ): Promise<UserModel> {
    return this.userService.createUser(userData)
  }

  @UseGuards(AuthGuard)
  @Get()
  async list() {
    return { ok: true }
  }
}
