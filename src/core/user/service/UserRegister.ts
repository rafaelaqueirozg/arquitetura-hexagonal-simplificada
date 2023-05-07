import { UseCase } from '../../shared/UseCase.ts';
import { EncryptionProvider } from '../model/EncryptionProvider.ts';
import { User } from '../model/User.ts';
import { UserCollection } from '../model/UserCollection.ts';

export class UserRegister implements UseCase<Required<User>, void> {
  constructor(
    private collection: UserCollection,
    private encryptProvider: EncryptionProvider
  ) {}

  async execute(args: Required<User>): Promise<void> {
    const encryptedPassword = await this.encryptProvider.encrypt(args.password);
    const user: User = { ...args, password: encryptedPassword };

    await this.collection.add(user);
  }
}
