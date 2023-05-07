import { Encrypt } from './adapters/Encrypt.ts';
import { UserCollectionInMemory } from './adapters/UserCollectionInMemory.ts';
import { UserLogin } from './core/user/service/UserLogin.ts';
import { UserRegister } from './core/user/service/UserRegister.ts';

const userCollection = new UserCollectionInMemory();
const encryptProvider = new Encrypt();

const register = new UserRegister(userCollection, encryptProvider);
await register.execute({
  name: 'Rafaela',
  email: 'rafaela@gmail.com',
  password: '123456',
});

const login = new UserLogin(userCollection, encryptProvider);
const user = await login.execute({
  email: 'rafaela@gmail.com',
  password: '123456',
});

console.log(user);
