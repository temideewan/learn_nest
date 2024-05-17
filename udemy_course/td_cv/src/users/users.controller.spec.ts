import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { AuthService } from './auth.service';
import { User } from './user.entity';
import { NotFoundException } from '@nestjs/common';

describe('UsersController', () => {
  let controller: UsersController;
  let fakeUserService: Partial<UsersService>;
  let fakeAuthService: Partial<AuthService>;

  beforeEach(async () => {
    fakeAuthService = {
      // signUp: () => {},
      signIn: (email: string, password: string) =>
        Promise.resolve({ id: 1, email, password } as User),
    };
    fakeUserService = {
      findOne: (id: number) => {
        return Promise.resolve({
          id,
          email: 'asdfsd@gmail.com',
          password: 'asdfsd',
        } as User);
      },
      find: (email: string) => {
        return Promise.resolve([
          {
            id: 1,
            email,
            password: 'asdfsd',
          } as User,
        ]);
      },
      // update: () => {},
      // remove: () => {},
    };
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        {
          provide: UsersService,
          useValue: fakeUserService,
        },
        {
          provide: AuthService,
          useValue: fakeAuthService,
        },
      ],
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('find all users with a given email', async () => {
    const users = await controller.findAllUsers('asdg@asdf.com');
    expect(users.length).toEqual(1);
    expect(users[0].email).toEqual('asdg@asdf.com');
  });
  it('return a single user with the given ID', async () => {
    const user = await controller.findUser('1');
    expect(user).toBeDefined();
  });
  it('throw an error if user with the given user is not found', async () => {
    fakeUserService.findOne = () => null;
    await expect(controller.findUser('1')).rejects.toThrow(NotFoundException);
  });

  it('signs in, updates session and return user', async () => {
    const session = { userId: -10 };
    const user = await controller.signIn(
      { email: 'asdf@aasd.com', password: 'asdffsd' },
      session,
    );
    expect(user.id).toEqual(1);
    expect(session.userId).toEqual(1);
  });
});
