import { Navigate } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../const';

type Props = {
  authStatus: AuthStatus;
  children: JSX.Element;
};

export const PrivateRoute = ({ authStatus, children }: Props) => {
  return authStatus === AuthStatus.Auth ? children : <Navigate to={AppRoute.SignIn} />;
};
