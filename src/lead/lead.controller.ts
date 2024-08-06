import { Controller, Post, Body } from '@nestjs/common'
import { LeadService } from './lead.service'
import { Lead } from '@prisma/client'

@Controller('leads')
export class LeadController {
  constructor(private readonly leadService: LeadService) {}

  @Post()
  async createLead(
    @Body()
    data: {
      lead_name: string
      name: string
      email: string
      phone: string
    },
  ): Promise<Lead> {
    return this.leadService.createLead(data)
  }
}
