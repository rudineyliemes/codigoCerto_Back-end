import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { Lead } from '@prisma/client'

@Injectable()
export class LeadService {
  constructor(private prisma: PrismaService) {}

  async createLead(data: {
    lead_name: string
    name: string
    email: string
    phone: string
  }): Promise<Lead> {
    return this.prisma.lead.create({
      data: {
        lead_name: data.lead_name,
        name: data.name,
        email: data.email,
        phone: data.phone,
      },
    })
  }

  async getLeads(): Promise<Lead[]> {
    return this.prisma.lead.findMany()
  }

  async getLead(id: number): Promise<Lead | null> {
    return this.prisma.lead.findUnique({
      where: { id },
    })
  }
}
