import { Action, Middleware } from 'redux';

import { RootReducer } from '../index';

export const logger: Middleware<unknown, RootReducer> = (_store) => (next) => (action: Action) => {
  const NAME_SPACE = 'user/';

  if (action.type.startsWith(NAME_SPACE)) {
    console.log(`The user is currently doing: ${action.type.slice(NAME_SPACE.length)}`);
  }

  return next(action);
};
