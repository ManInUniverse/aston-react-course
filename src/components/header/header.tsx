import { Link } from 'react-router-dom';

import { AppRoute } from '../../const';
import { useAppSelector } from '../../hooks/useAppSelector';
import { getAuthCheckedStatus } from '../../store/slices/user-slice/selectors';

import logo from '../../assets/logo.svg';

import { UserNav } from '../user-nav/user-nav';
import { SearchForm } from '../search-form/search-form';

export const Header = () => {
  const isAuthChecked = useAppSelector(getAuthCheckedStatus);

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
          <div className="ml-6">
            <UserNav />
          </div>
        )}
      </div>
    </header>
  );
};
