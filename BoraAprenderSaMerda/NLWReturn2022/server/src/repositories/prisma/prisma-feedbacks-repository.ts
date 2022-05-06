import { prisma } from './../../prisma';
import { FeedbacksRespository, FeedbackCreateData } from './../feedbacks-repositories';

export class PrismaFeedbacksRepository implements FeedbacksRespository {
  
  async create({ type, comment, screenshot }: FeedbackCreateData){ 
    await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot
      }
    })
  }
}