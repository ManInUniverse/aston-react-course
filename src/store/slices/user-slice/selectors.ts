import { NameSpace, AuthStatus } from '../../../const';
import { RootState } from '../../index';
import { UserData } from '../../../types/user';

export const getAuthStatus = (state: RootState): AuthStatus => state[NameSpace.User].authStatus;

export const getAuthCheckedStatus = (state: RootState): boolean =>
  state[NameSpace.User].authStatus !== AuthStatus.Unknown;

export const getUserData = (state: RootState): UserData | null => state[NameSpace.User].userData;

export const getErrorMessage = (state: RootState): string | null =>
  state[NameSpace.User].errorMessage;
