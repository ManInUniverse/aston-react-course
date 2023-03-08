import { User, Users, SignInData, SignUpData } from '../types/user';

const USERS = 'users';
const DELAY = 1000;

export class UserAPI {
  signUp = ({ name, email, password }: SignUpData): Promise<User> =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        const users = this.getUsers();
        const isUserExist = users.some((user) => user.email === email);

        if (!isUserExist) {
          const newUser: User = {
            name,
            email,
            password,
            isAuth: true,
            favorites: [],
            history: [],
          };
          users.push(newUser);
          this.putUsers(users);

          resolve(newUser);
        }

        reject(new Error('User with this email already exist!'));
      }, DELAY);
    });

  signIn = ({ email, password }: SignInData): Promise<User> =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        const users = this.getUsers();
        const targetUser = users.find((user) => user.email === email);

        if (targetUser && targetUser.password === password) {
          targetUser.isAuth = true;
          this.putUsers(users);

          resolve(targetUser);
        }

        reject(new Error('Invalid email or password!'));
      }, DELAY);
    });

  signOut = (): Promise<void> =>
    new Promise((resolve) => {
      setTimeout(() => {
        const users = this.getUsers();
        const authorizedUser = users.find((user) => user.isAuth);

        if (authorizedUser) {
          authorizedUser.isAuth = false;
          this.putUsers(users);
        }

        resolve();
      }, DELAY);
    });

  checkAuth = (): Promise<User> =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        const users = this.getUsers();
        const authorizedUser = users.find((user) => user.isAuth);

        if (authorizedUser) {
          resolve(authorizedUser);
        }

        reject(new Error('User is not authorized!'));
      }, DELAY);
    });

  private getUsers = (): Users => {
    const users = localStorage.getItem(USERS);
    return users ? JSON.parse(users) : [];
  };

  private putUsers = (users: Users) => {
    localStorage.setItem(USERS, JSON.stringify(users));
  };
}
