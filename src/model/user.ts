export type User = {
  name: string;
  lastName: string;
  birthDate: number;
  gender: 'male' | 'female' | 'other' | 'notToMention' | null;
  email: string;
  isNewsLetter: boolean;
};
