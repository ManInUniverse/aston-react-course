import { useAppSelector } from '../../hooks/useAppSelector';
import { getUserData } from '../../store/slices/user-slice/selectors';

import { FavoriteList } from '../../components/favorite-list/favorite-list';

export const FavoritesPage = () => {
  const userData = useAppSelector(getUserData);

  return (
    <section>
      <h1 className="font-bold text-4xl text-center my-10">Favorites</h1>;
      {userData && <FavoriteList favorites={userData.favorites} />}
    </section>
  );
};
