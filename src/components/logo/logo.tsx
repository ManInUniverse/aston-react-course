import { Link } from 'react-router-dom';

import { AppRoute } from '../../const';

import logo from '../../assets/logo.svg';

export const Logo = () => {
  return (
    <Link to={AppRoute.Main} className="hover:opacity-80 transition-all">
      <img className="h-[50px]" src={logo} alt="Pictorial" />
    </Link>
  );
};
