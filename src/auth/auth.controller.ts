import { Body, Controller, Post } from '@nestjs/common'
import { AuthService } from './auth.service'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post()
  async login(@Body() userData: { email: string; password: string }) {
    return {
      token: await this.authService.login(userData.email, userData.password),
    }
  }
}
