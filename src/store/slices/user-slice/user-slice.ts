import { createSlice } from '@reduxjs/toolkit';
import { AuthStatus, NameSpace } from '../../../const';
import { UserData } from '../../../types/user';
import {
  signUpAction,
  signInAction,
  signOutAction,
  checkAuthAction,
  addToFavoritesAction,
  addToHistoryAction,
  clearHistoryAction,
} from '../../user-api-actions';

type UserSlice = {
  authStatus: AuthStatus;
  userData: UserData | null;
};

const initialState: UserSlice = {
  authStatus: AuthStatus.Unknown,
  userData: null,
};

const userSlice = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(
        checkAuthAction.fulfilled,
        (state, { payload: { name, email, favorites, history } }) => {
          state.userData = { name, email, favorites, history };
          state.authStatus = AuthStatus.Auth;
        }
      )
      .addCase(checkAuthAction.rejected, (state) => {
        state.userData = null;
        state.authStatus = AuthStatus.NonAuth;
      })
      // -------------------------------------------------------------------------
      .addCase(
        signUpAction.fulfilled,
        (state, { payload: { name, email, favorites, history } }) => {
          state.userData = { name, email, favorites, history };
          state.authStatus = AuthStatus.Auth;
        }
      )
      .addCase(signUpAction.rejected, (state) => {
        state.userData = null;
        state.authStatus = AuthStatus.NonAuth;
      })
      // -------------------------------------------------------------------------
      .addCase(
        signInAction.fulfilled,
        (state, { payload: { name, email, favorites, history } }) => {
          state.userData = { name, email, favorites, history };
          state.authStatus = AuthStatus.Auth;
        }
      )
      .addCase(signInAction.rejected, (state) => {
        state.userData = null;
        state.authStatus = AuthStatus.NonAuth;
      })
      // -------------------------------------------------------------------------
      .addCase(signOutAction.fulfilled, (state) => {
        state.userData = null;
        state.authStatus = AuthStatus.NonAuth;
      })
      // -------------------------------------------------------------------------
      .addCase(
        addToFavoritesAction.fulfilled,
        (state, { payload: { name, email, favorites, history } }) => {
          state.userData = { name, email, favorites, history };
        }
      )
      // -------------------------------------------------------------------------
      .addCase(
        addToHistoryAction.fulfilled,
        (state, { payload: { name, email, favorites, history } }) => {
          state.userData = { name, email, favorites, history };
        }
      )
      // -------------------------------------------------------------------------
      .addCase(
        clearHistoryAction.fulfilled,
        (state, { payload: { name, email, favorites, history } }) => {
          state.userData = { name, email, favorites, history };
        }
      );
  },
});

export { userSlice };
