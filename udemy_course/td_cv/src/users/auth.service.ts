import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { randomBytes, scrypt as _scrypt, timingSafeEqual } from 'crypto';
import { promisify } from 'util';

const scrypt = promisify(_scrypt);

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async signUp(email: string, password: string) {
    // see if email is in use
    const users = await this.usersService.find(email);

    if (users.length) {
      throw new BadRequestException('email in use');
    }

    // hash user's password
    // generate a salt
    const salt = randomBytes(8).toString('hex');
    // Hash the salt and password together
    const hash = (await scrypt(password, salt, 32)) as Buffer;

    // join the hashed result and the salt together
    const resultHash = salt + '.' + hash.toString('hex');

    // create a new user and save it

    const user = await this.usersService.create(email, resultHash);

    // return the user

    return user;
  }
  async signIn(email: string, password: string) {
    const [user] = await this.usersService.find(email);
    if (!user) {
      throw new NotFoundException('user not found');
    }

    const [salt, storedHash] = user.password.split('.');
    const hash = (await scrypt(password, salt, 32)) as Buffer;
    const storedHashBuffer = Buffer.from(storedHash, 'hex');
    const isEqual = timingSafeEqual(hash, storedHashBuffer);
    if (!isEqual) {
      throw new BadRequestException();
    }
    return user;
  }
}
