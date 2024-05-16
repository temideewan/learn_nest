import { BadRequestException, NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UsersService } from './users.service';
import { User } from './user.entity';

describe('AuthService', () => {
  let fakeUserService: Partial<UsersService>;
  let service: AuthService;
  beforeEach(async () => {
    // create a fake copy of the user service
    const users: User[] = [];
    fakeUserService = {
      find: (email: string) => {
        const filteredUsers = users.filter((user) => user.email === email);
        return Promise.resolve(filteredUsers);
      },
      create: (email: string, password: string) => {
        const user = {
          id: Math.floor(Math.random() * 10000),
          email,
          password,
        } as User;
        users.push(user);
        return Promise.resolve(user);
      },
    };
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: UsersService,
          useValue: fakeUserService,
        },
      ],
    }).compile();
    service = module.get(AuthService);
  });
  it('can create an instance of auth service', async () => {
    expect(service).toBeDefined();
  });
  it('Creates a new user with a salted and hashed password', async () => {
    const user = await service.signUp('asdfsdas@email.com', 'asdf');

    expect(user.password).not.toEqual('asdf');
    const [salt, hash] = user.password.split('.');
    expect(salt).toBeDefined();
    expect(hash).toBeDefined();
  });
  it('throws an error if user signs up with email that is in use', async () => {
    await service.signUp('asdfsdas@email.com', 'asdf');
    await expect(service.signUp('asdfsdas@email.com', 'asdf')).rejects.toThrow(
      BadRequestException,
    );
  });
  it('throws if signIn is called with an unused email', async () => {
    await expect(
      service.signIn('asdf@setDefaultHighWaterMark.com', 'passdfglkj'),
    ).rejects.toThrow(NotFoundException);
  });

  it('throws if an invalid password is provided', async () => {
    await service.signUp('asdfsdas@email.com', 'asdfy');
    await expect(service.signIn('asdfsdas@email.com', 'asdf')).rejects.toThrow(
      BadRequestException,
    );
  });

  it('returns a user if correct password is provided', async () => {
    await service.signUp('lasdfghfd@fdgfd.com', 'password');
    const user = await service.signIn('lasdfghfd@fdgfd.com', 'password');
    expect(user).toBeDefined();
  });
});
