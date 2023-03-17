import { PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import { AppRoute, AuthStatus } from '../../const';
import { useAppSelector } from '../../hooks/useAppSelector';
import { getAuthStatus } from '../../store/slices/user-slice/selectors';

type Props = PropsWithChildren<{
  children: JSX.Element;
}>;

export const PrivateRoute = ({ children }: Props) => {
  const authStatus = useAppSelector(getAuthStatus);

  return authStatus === AuthStatus.Auth ? children : <Navigate to={AppRoute.SignIn} />;
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
