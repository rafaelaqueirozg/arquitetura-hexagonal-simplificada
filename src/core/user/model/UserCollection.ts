import { User } from '../model/User.ts';

export interface UserCollection {
  add(user: User): Promise<void>;
  findByEmail(email: string): Promise<User | null>;
}
