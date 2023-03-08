import { createAsyncThunk } from '@reduxjs/toolkit';

import { SignInData, SignUpData, User } from '../types/user';
import { AppDispatch, RootState } from '../store/index';
import { UserAPI } from '../services/user-api';

type AppThunkApiConfig = {
  dispatch: AppDispatch;
  state: RootState;
  extra: UserAPI;
};

export const signUpAction = createAsyncThunk<User, SignUpData, AppThunkApiConfig>(
  'user/signUp',
  async (signUpData, { extra: userAPI }) => {
    return await userAPI.signUp(signUpData);
  }
);

export const signInAction = createAsyncThunk<User, SignInData, AppThunkApiConfig>(
  'user/signIn',
  async (signInData, { extra: userAPI }) => {
    return await userAPI.signIn(signInData);
  }
);

export const signOutAction = createAsyncThunk<void, undefined, AppThunkApiConfig>(
  'user/signOut',
  async (_arg, { extra: userAPI }) => {
    await userAPI.signOut();
  }
);

export const checkAuthAction = createAsyncThunk<User, undefined, AppThunkApiConfig>(
  'user/checkAuth',
  async (_arg, { extra: userAPI }) => {
    return await userAPI.checkAuth();
  }
);
