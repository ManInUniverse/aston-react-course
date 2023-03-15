import { Picture } from './picture';

export type User = {
  name: string;
  email: string;
  password: string;
  isAuth: boolean;
  favorites: string[];
  history: HistoryItem[];
};

export type Users = User[];

export type UserData = Omit<User, 'password' | 'isAuth'>;

export type SignInData = Pick<User, 'email' | 'password'>;

export type SignUpData = SignInData & Pick<User, 'name'>;

export type AddToFavoritesData = Pick<User, 'email'> & Pick<Picture, 'id'>;

export type AddToHistoryData = Pick<User, 'email'> & Pick<HistoryItem, 'body'>;

export type ClearHistoryData = Pick<User, 'email'>;

export type HistoryItem = {
  date: string;
  body: string;
};
