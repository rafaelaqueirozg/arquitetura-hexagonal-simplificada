// deno-lint-ignore-file
import { EncryptionProvider } from '../core/user/model/EncryptionProvider.ts';

export class EncryptInverter implements EncryptionProvider {
  async encrypt(password: string): Promise<string> {
    return password.split('').reverse().join('');
  }

  async compare(password: string, encryptedPassword: string): Promise<boolean> {
    return password.split('').reverse().join('') === encryptedPassword;
  }
}
