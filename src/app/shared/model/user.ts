import {Role} from '../../models/role';
import {Tokens} from './tokens';

export class User {
  id?: number;
  username: string;
  password: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  role?: Role;
  token?: Tokens;
}
