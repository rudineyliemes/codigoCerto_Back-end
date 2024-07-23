import { BadRequestException, HttpException, Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { Prisma } from '@prisma/client'
import { compare } from 'bcrypt'
import { PrismaService } from 'src/database/prisma.service'

@Injectable()
export class AuthService {
  constructor(
    private readonly jwt: JwtService,
    private readonly db: PrismaService,
  ) {}
  async makeToken(user: Prisma.UserCreateInput) {
    return this.jwt.sign(
      { id: user.id, nome: user.name, email: user.email },
      { expiresIn: '7d', subject: user.id },
    )
  }

  async login(email: string, password: string) {
    const user = await this.db.user.findFirst({
      where: {
        email: email,
      },
    })
    const passwordDcrypt = await compare(password, user.password)
    if (!passwordDcrypt) {
      throw new HttpException('Usuário ou senha inválido', 400)
    }
    return this.makeToken(user)
  }

  async verifyToken(token: string) {
    try {
      const payload = this.jwt.verify(token)
      if (payload) {
        return { status: 'Authorized' }
      }
    } catch (error) {
      throw new BadRequestException({ error: error.message })
    }
  }
}
