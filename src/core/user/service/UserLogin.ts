import { UseCase } from '../../shared/UseCase.ts';
import { EncryptionProvider } from '../model/EncryptionProvider.ts';
import { User } from '../model/User.ts';
import { UserCollection } from '../model/UserCollection.ts';

export interface UserLoginDTO {
  email: string;
  password: string;
}

export class UserLogin implements UseCase<UserLoginDTO, User | null> {
  constructor(
    private collection: UserCollection,
    private encryptProvider: EncryptionProvider
  ) {}

  async execute(dto: UserLoginDTO): Promise<User | null> {
    const user = await this.collection.findByEmail(dto.email);

    if (!user) return null;

    const isPasswordEquals = await this.encryptProvider.compare(
      dto.password,
      user.password!
    );

    if (!isPasswordEquals) return null;

    return { name: user.name, email: user.email };
  }
}
