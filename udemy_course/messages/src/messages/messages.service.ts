import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';

@Injectable()
export class MessagesService {

  constructor(public messagesRepo: MessagesRepository) {
  }
  // constructor() {
  //   // service is creating its own dependencies
  //   // WRONG IN REAL APPS
  //   this.messagesRepo = new MessagesRepository();
  // }

  findOne(id: string) {
    return this.messagesRepo.findOne(id);
  }

  findAll() {
    return this.messagesRepo.findAll();
  }

  create(content: string) {
    return this.messagesRepo.create(content);
  }
}
