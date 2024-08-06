import { PrismaService } from '../prisma/prisma.service'
import { LeadService } from './lead.service'
import { Lead } from '@prisma/client'

describe('LeadService', () => {
  let service: LeadService
  let prisma: PrismaService

  beforeEach(() => {
    prisma = new PrismaService()
    service = new LeadService(prisma)
  })

  it('should create a lead', async () => {
    const leadData = {
      lead_name: 'New Lead',
      name: 'Vinicius Borges',
      email: 'text@example.com',
      phone: '1234567890',
    }

    prisma.lead.create = jest.fn().mockResolvedValue(leadData)

    const result = await service.createLead(leadData)
    expect(result).toEqual(leadData)
  })

  it('should get a lead', async () => {
    const leadId = 1
    const leadData = {
      id: leadId,
      lead_name: 'New Lead',
      name: 'Vinicius Borges',
      email: 'test@example.com',
      phone: '1234567890',
    }

    prisma.lead.findUnique = jest.fn().mockResolvedValue(leadData)

    const result = await service.getLead(leadId)
    expect(result).toEqual(leadData)
  })
})
