import { useGetRandomPicturesQuery } from '../../services/picture-api';

import { PictureList } from '../../components/picture-list/picture-list';

export const MainPage = () => {
  const { isLoading, data: randomPictures } = useGetRandomPicturesQuery();

  if (isLoading) {
    return <p className="text-center text-4xl font-bold">Loading...</p>;
  }

  return (
    <>
      <h1 className="font-bold text-4xl text-center my-10 sr-only">Pictorial. Main page</h1>

      <section>
        <h2 className="sr-only">Random pictures</h2>

        {randomPictures && <PictureList pictures={randomPictures} />}
      </section>
    </>
  );
};
