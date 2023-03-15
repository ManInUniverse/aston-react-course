import { useAppSelector } from '../../hooks/useAppSelector';
import { getUserData } from '../../store/slices/user-slice/selectors';

import { FavoriteList } from '../../components/favorite-list/favorite-list';

export const FavoritesPage = () => {
  const userData = useAppSelector(getUserData);

  return (
    <section>
      <h1 className="sr-only">Favorites</h1>

      {userData && (
        <>
          {userData.favorites.length ? (
            <FavoriteList favorites={userData.favorites} />
          ) : (
            <p className="text-center text-3xl my-10">
              It's empty here for now. You can add pictures you like to favorites and view them here
            </p>
          )}
        </>
      )}
    </section>
  );
};
