import { useParams } from 'react-router-dom';

import { useGetPictureByIdQuery } from '../../services/picture-api';

export const PicturePage = () => {
  const { id } = useParams<{ id: string }>();
  const { isLoading, data: picture } = useGetPictureByIdQuery(id as string);

  if (isLoading) {
    return <p className="text-center text-4xl font-bold">Loading...</p>;
  }

  return (
    <section>
      {picture && (
        <>
          <h1 className="font-bold text-4xl text-center my-10 first-letter:uppercase">
            {picture.description}
          </h1>

          <img className="mx-auto" src={picture.urlRegular} alt={picture.description} />
        </>
      )}
    </section>
  );
};
