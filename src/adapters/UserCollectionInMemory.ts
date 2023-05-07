// deno-lint-ignore-file
import { User } from '../core/user/model/User.ts';
import { UserCollection } from '../core/user/model/UserCollection.ts';

export class UserCollectionInMemory implements UserCollection {
  static readonly users: User[] = [];

  async add(user: User): Promise<void> {
    UserCollectionInMemory.users.push(user);
  }

  async findByEmail(email: string): Promise<User | null> {
    return (
      UserCollectionInMemory.users.find((user) => user.email === email) ?? null
    );
  }
}
