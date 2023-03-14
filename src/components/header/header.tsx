import { AuthStatus } from '../../const';
import { useAppSelector } from '../../hooks/useAppSelector';
import { getAuthCheckedStatus, getAuthStatus } from '../../store/slices/user-slice/selectors';

import { Logo } from '../logo/logo';
import { SearchForm } from '../search-form/search-form';
import { GuestNav } from '../guest-nav/guest-nav';
import { UserNav } from '../user-nav/user-nav';

export const Header = () => {
  const isAuthChecked = useAppSelector(getAuthCheckedStatus);
  const authStatus = useAppSelector(getAuthStatus);

  return (
    <header className="bg-[#01012A] shadow-md">
      <div className="container mx-auto flex items-center py-2 px-6">
        <div className="mr-10">
          <Logo />
        </div>

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
