import { NavLink } from 'react-router-dom';

import { AppRoute, AuthStatus } from '../../const';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { getAuthStatus, getUserData } from '../../store/slices/user-slice/selectors';
import { signOutAction } from '../../store/user-api-actions';

const setActive = ({ isActive }: { isActive: boolean }) =>
  `${
    isActive ? 'text-[#F9CC0B]' : 'text-[#E9E9E9]'
  } hover:text-[#F9CC0B] text-xl p-2 transition block`;

export const UserNav = () => {
  const dispatch = useAppDispatch();
  const authStatus = useAppSelector(getAuthStatus);
  const userData = useAppSelector(getUserData);

  return (
    <nav>
      <ul className="flex flex-wrap">
        {authStatus === AuthStatus.Auth ? (
          <>
            <li className="mr-6 last:mr-0 rounded-md border border-transparent">
              {userData && (
                <span className="text-[#E9E9E9] text-xl p-2 block">{userData.name}</span>
              )}
            </li>
            <li className="mr-6 last:mr-0 rounded-md border border-transparent">
              <NavLink to={AppRoute.Favorites} className={setActive}>
                Favorites
              </NavLink>
            </li>
            <li className="mr-6 last:mr-0 rounded-md border border-transparent">
              <NavLink to={AppRoute.History} className={setActive}>
                History
              </NavLink>
            </li>
            <li className="mr-7 last:mr-0 rounded-md border border-transparent">
              <button
                onClick={() => dispatch(signOutAction())}
                className="text-[#E9E9E9] hover:text-red-600 text-xl p-2 transition block"
              >
                Sign out
              </button>
            </li>
          </>
        ) : (
          <>
            <li className="mr-6 last:mr-0 rounded-md border border-transparent">
              <NavLink to={AppRoute.SignIn} className={setActive}>
                Sign in
              </NavLink>
            </li>
            <li className="mr-6 last:mr-0 rounded-md border border-[#F9CC0B]">
              <NavLink to={AppRoute.SignUp} className={setActive}>
                Sign up
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};
