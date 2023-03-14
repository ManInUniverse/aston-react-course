import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { AppRoute } from '../../const';
import { Picture } from '../../types/picture';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { getUserData } from '../../store/slices/user-slice/selectors';
import { addToFavoritesAction } from '../../store/user-api-actions';

import { FavoriteButton } from '../favorite-button/favorite-button';

type Props = {
  picture: Picture;
};

export const PictureCard = ({ picture }: Props) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const userData = useAppSelector(getUserData);

  const isFavorite = userData?.favorites.some((id) => id === picture.id);

  const onFavoriteButtonClick = () => {
    if (userData) {
      dispatch(
        addToFavoritesAction({
          email: userData.email,
          id: picture.id,
        })
      );
    } else {
      navigate(AppRoute.SignIn);
    }
  };

  return (
    <div className="h-[300px] w-full border border-gray-200 rounded-lg shadow-md overflow-hidden relative group">
      <Link
        to={`/pictures/${picture.id}`}
        className="absolute top-0 left-0 z-[1] w-full h-full opacity-50 group-hover:bg-gradient-to-t group-hover:from-black"
      >
        <span className="sr-only">See more</span>
      </Link>

      <img
        className="rounded-lg h-full w-full object-cover transition duration-500 group-hover:scale-110"
        src={picture.urlSmall}
        alt={picture.description}
      />

      <div
        className={`${
          isFavorite ? 'block' : 'hidden'
        } absolute bottom-0 right-0 z-[2] m-4 group-hover:block`}
      >
        <FavoriteButton isActive={!!isFavorite} onButtonClick={onFavoriteButtonClick} />
      </div>
    </div>
  );
};
