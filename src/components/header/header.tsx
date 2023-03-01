import { Link } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../const';

import logo from '../../assets/logo.svg';

import { UserNav } from '../user-nav/user-nav';
import { SearchForm } from '../search-form/search-form';

export const Header = () => {
  return (
    <header className="bg-[#01012A] shadow-md">
      <div className="container mx-auto flex items-center py-2 px-6">
        <Link to={AppRoute.Main} className="hover:opacity-80 transition-all mr-10">
          <img className="h-[50px]" src={logo} alt="Pictorial" />
        </Link>

        <div className="mr-6 xl:w-[350px]">
          <SearchForm />
        </div>

        <div className="ml-auto">
          <UserNav authStatus={AuthStatus.Auth} />
        </div>
      </div>
    </header>
  );
};
