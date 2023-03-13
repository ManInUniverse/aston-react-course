import { User } from '../../types/user';

import { FavoriteItem } from '../favorite-item/favorite-item';

type Props = {
  favorites: User['favorites'];
};

export const FavoriteList = ({ favorites }: Props) => {
  return (
    <ul className="grid grid-cols-fluid justify-center gap-5">
      {favorites.map((id) => (
        <li key={id}>
          <FavoriteItem id={id} />
        </li>
      ))}
    </ul>
  );
};
