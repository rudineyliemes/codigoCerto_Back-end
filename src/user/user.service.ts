import { Injectable } from '@nestjs/common';
import { Prisma, User as UserModel } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async createUser(data: Prisma.UserCreateInput) {
    const hashPassword = await bcrypt.hash(data.password, 10);

    return this.prisma.user.create({
      data: { ...data, password: hashPassword },
    });
  }
}
