export enum AppRoute {
  Main = '/',
  Favorites = '/favorites',
  History = '/history',
  SignIn = '/signin',
  SignUp = '/signup',
  Search = '/search',
  Picture = '/pictures/:id',
}

export enum AuthStatus {
  Auth = 'AUTH',
  NonAuth = 'NON_AUTH',
  Unknown = 'UNKNOWN',
}

export enum NameSpace {
  User = 'USER',
}
