import { NestMiddleware, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { NextFunction, Request, Response } from 'express'

export class authMiddleware implements NestMiddleware {
  constructor(private readonly jwt: JwtService) {}
  use(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers
    console.log(authorization)

    try {
      const payload = this.jwt.verify((authorization ?? '').split(' ')[1])
      if (payload) {
        next()
      }
    } catch (error) {
      throw new UnauthorizedException({ error: error.message })
    }
  }
}
