import { User } from '../models/user';
import { AccesData } from '../models/accesData';

export const user: User = {
  name: '',
  lastName: '',
  birthDate: 0,
  gender: null,
  email: '',
  isNewsLetter: false,
};

export const accesData: AccesData = {
  userName: '',
  password: '',
  repeatPassword: '',
  acountType: null,
};
