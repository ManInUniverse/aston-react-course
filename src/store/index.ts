import { configureStore } from '@reduxjs/toolkit';

import { NameSpace } from '../const';
import { userSlice } from './slices/user-slice/user-slice';
import { UserAPI } from '../services/user-api';

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

const userAPI = new UserAPI();

const store = configureStore({
  reducer: {
    [NameSpace.User]: userSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: userAPI,
      },
    }),
});

export { store };
