import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { NameSpace } from '../const';
import { userSlice } from './slices/user-slice/user-slice';

import { logger } from './middleware/logger';
import { UserAPI } from '../services/user-api';
import { pictureAPI } from '../services/picture-api';

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type RootReducer = ReturnType<typeof rootReducer>;

const userAPI = new UserAPI();

const rootReducer = combineReducers({
  [NameSpace.User]: userSlice.reducer,
  [pictureAPI.reducerPath]: pictureAPI.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: userAPI,
      },
    })
      .concat(pictureAPI.middleware)
      .concat(logger),
});

export { store };
