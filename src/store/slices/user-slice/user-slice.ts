import { createSlice } from '@reduxjs/toolkit';
import { AuthStatus, NameSpace } from '../../../const';
import { UserData } from '../../../types/user';
import { signUpAction, signInAction, signOutAction, checkAuthAction } from '../../user-api-actions';

type UserSlice = {
  authStatus: AuthStatus;
  userData: UserData | null;
  errorMessage: string | null;
};

const initialState: UserSlice = {
  authStatus: AuthStatus.Unknown,
  userData: null,
  errorMessage: null,
};

const userSlice = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.pending, (state) => {
        state.errorMessage = null;
      })
      .addCase(
        checkAuthAction.fulfilled,
        (state, { payload: { name, email, favorites, history } }) => {
          state.userData = { name, email, favorites, history };
          state.authStatus = AuthStatus.Auth;
        }
      )
      .addCase(checkAuthAction.rejected, (state, { error }) => {
        state.userData = null;
        state.authStatus = AuthStatus.NonAuth;
        if (error.message) {
          state.errorMessage = error.message;
        }
      })
      // -------------------------------------------------------------------------------------------------------------------
      .addCase(signUpAction.pending, (state) => {
        state.errorMessage = null;
      })
      .addCase(
        signUpAction.fulfilled,
        (state, { payload: { name, email, favorites, history } }) => {
          state.userData = { name, email, favorites, history };
          state.authStatus = AuthStatus.Auth;
        }
      )
      .addCase(signUpAction.rejected, (state, { error }) => {
        state.userData = null;
        state.authStatus = AuthStatus.NonAuth;
        if (error.message) {
          state.errorMessage = error.message;
        }
      })
      // -------------------------------------------------------------------------------------------------------------------
      .addCase(signInAction.pending, (state) => {
        state.errorMessage = null;
      })
      .addCase(
        signInAction.fulfilled,
        (state, { payload: { name, email, favorites, history } }) => {
          state.userData = { name, email, favorites, history };
          state.authStatus = AuthStatus.Auth;
        }
      )
      .addCase(signInAction.rejected, (state, { error }) => {
        state.userData = null;
        state.authStatus = AuthStatus.NonAuth;
        if (error.message) {
          state.errorMessage = error.message;
        }
      })
      // -------------------------------------------------------------------------------------------------------------------
      .addCase(signOutAction.pending, (state) => {
        state.errorMessage = null;
      })
      .addCase(signOutAction.fulfilled, (state) => {
        state.userData = null;
        state.authStatus = AuthStatus.NonAuth;
      })
      .addCase(signOutAction.rejected, (state, { error }) => {
        if (error.message) {
          state.errorMessage = error.message;
        }
      });
  },
});

export { userSlice };
