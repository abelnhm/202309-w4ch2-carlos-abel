export type User = {
  name: string;
  lastName: string;
  birthDate: number;
  gender: 'male' | 'female' | 'other' | 'not to mention' | null;
  email: string;
  isNewsLetter: boolean;
};
