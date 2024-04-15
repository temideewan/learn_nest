import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable({})
export class AuthService {
  constructor(private prisma: PrismaService) {}
  signIn() {
    return { message: 'I am signed in' };
  }

  signUp() {
    return { message: 'I am signed up' };
  }
}
