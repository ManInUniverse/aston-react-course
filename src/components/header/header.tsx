import { Link } from 'react-router-dom';

import { AppRoute, AuthStatus } from '../../const';
import { useAppSelector } from '../../hooks/useAppSelector';
import { getAuthCheckedStatus, getAuthStatus } from '../../store/slices/user-slice/selectors';

import logo from '../../assets/logo.svg';

import { UserNav } from '../user-nav/user-nav';
import { GuestNav } from '../guest-nav/guest-nav';
import { SearchForm } from '../search-form/search-form';

export const Header = () => {
  const isAuthChecked = useAppSelector(getAuthCheckedStatus);
  const authStatus = useAppSelector(getAuthStatus);

  return (
    <header className="bg-[#01012A] shadow-md">
      <div className="container mx-auto flex items-center py-2 px-6">
        <Link to={AppRoute.Main} className="hover:opacity-80 transition-all mr-10">
          <img className="h-[50px]" src={logo} alt="Pictorial" />
        </Link>

        <div className="mr-auto xl:w-[350px]">
          <SearchForm />
        </div>

        {isAuthChecked && (
          <div className="ml-6">{authStatus === AuthStatus.Auth ? <UserNav /> : <GuestNav />}</div>
        )}
      </div>
    </header>
  );
};
