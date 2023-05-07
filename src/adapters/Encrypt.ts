import * as bcrypt from 'https://deno.land/x/bcrypt@v0.4.1/mod.ts';
import { EncryptionProvider } from '../core/user/model/EncryptionProvider.ts';

export class Encrypt implements EncryptionProvider {
  encrypt(password: string): Promise<string> {
    return bcrypt.hash(password);
  }
  compare(password: string, encryptedPassword: string): Promise<boolean> {
    return bcrypt.compare(password, encryptedPassword);
  }
}
