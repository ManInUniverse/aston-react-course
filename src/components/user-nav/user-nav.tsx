import { AppRoute } from '../../const';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { getUserData, getUserProcessingStatus } from '../../store/slices/user-slice/selectors';
import { signOutAction } from '../../store/user-api-actions';

import { ReactComponent as FavoriteIcon } from '../../assets/favorite-icon.svg';
import { ReactComponent as HistoryIcon } from '../../assets/history-icon.svg';
import { ReactComponent as SignOutIcon } from '../../assets/sign-out-icon.svg';

import { UserNavItem } from '../user-nav-item/user-nav-item';
import { UserNavLink } from '../user-nav-link/user-nav-link';
import { Spinner } from '../spinner/spinner';

export const UserNav = () => {
  const dispatch = useAppDispatch();
  const userData = useAppSelector(getUserData);
  const isUserProcessing = useAppSelector(getUserProcessingStatus);

  const favoritesCount = userData?.favorites.length;

  return (
    <nav>
      <ul className="flex flex-wrap items-center">
        <UserNavItem>
          {userData && <span className="text-[#E9E9E9] text-xl p-2 block">{userData.name}</span>}
        </UserNavItem>

        <UserNavItem>
          <UserNavLink to={AppRoute.Favorites} title="Favorites">
            <FavoriteIcon className="mx-3 my-1" width="30" height="30" fill="currentColor" />

            {!!favoritesCount && (
              <span className="absolute right-0 top-0 bg-red-500 text-white rounded-xl text-sm px-2">
                {favoritesCount}
              </span>
            )}

            <span className="sr-only">Favorites</span>
          </UserNavLink>
        </UserNavItem>

        <UserNavItem>
          <UserNavLink to={AppRoute.History} title="History">
            <HistoryIcon width="30" height="30" fill="currentColor" />

            <span className="sr-only">History</span>
          </UserNavLink>
        </UserNavItem>

        <UserNavItem>
          <button
            onClick={() => dispatch(signOutAction())}
            className="text-[#E9E9E9] hover:text-red-600 text-xl p-2 transition block"
            title="Sign out"
            disabled={isUserProcessing}
          >
            {isUserProcessing ? (
              <Spinner />
            ) : (
              <>
                <SignOutIcon width="28" height="28" stroke="currentColor" />

                <span className="sr-only">Sign out</span>
              </>
            )}
          </button>
        </UserNavItem>
      </ul>
    </nav>
  );
};
