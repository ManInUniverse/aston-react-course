import { useGetPictureByIdQuery } from '../../services/picture-api';
import { Picture } from '../../types/picture';

import { PictureCard } from '../picture-card/picture-card';

type Props = {
  id: Picture['id'];
};

export const FavoriteItem = ({ id }: Props) => {
  const { isLoading, data: favoritePicture } = useGetPictureByIdQuery(id as string);

  return (
    <div className="h-[300px] w-full flex justify-center items-center">
      {isLoading && <p className="text-center font-bold text-2xl">Loading...</p>}

      {favoritePicture && <PictureCard picture={favoritePicture} />}
    </div>
  );
};
