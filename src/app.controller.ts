import { Controller, Get } from '@nestjs/common'

@Controller()
export class AppController {
  @Get('new-endpoint')
  getNewEndpoint(): string {
    return 'Novo Endpoint!'
  }
}
