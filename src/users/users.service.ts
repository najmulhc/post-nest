import { Injectable } from '@nestjs/common';
@Injectable()
export class UsersService {
  private users: string[] = [];

  create(username: string) {
    this.users.push(username);
    return this.users;
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
