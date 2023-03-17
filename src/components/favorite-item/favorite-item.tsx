import { useGetPictureByIdQuery } from '../../services/picture-api';
import { Picture } from '../../types/picture';

import { PictureCard } from '../picture-card/picture-card';

type Props = {
  id: Picture['id'];
};

export const FavoriteItem = ({ id }: Props) => {
  const { isError, isLoading, data: favoritePicture } = useGetPictureByIdQuery(id as string);

  return (
    <div className="h-[300px] w-full flex justify-center items-center">
      {isLoading && <p className="text-center text-2xl">Loading...</p>}

      {isError && <p className="text-center text-2xl">Failed to get data from server</p>}

      {favoritePicture && <PictureCard picture={favoritePicture} />}
    </div>
  );
};
