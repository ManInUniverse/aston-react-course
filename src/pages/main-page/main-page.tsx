import { useGetRandomPicturesQuery } from '../../services/picture-api';

import { PictureList } from '../../components/picture-list/picture-list';

const MainPage = () => {
  const { isError, isLoading, data: randomPictures } = useGetRandomPicturesQuery();

  if (isLoading) {
    return <p className="text-center text-3xl my-10">Loading...</p>;
  }

  if (isError) {
    return <p className="text-center text-3xl my-10">Failed to get data from server</p>;
  }

  return (
    <>
      <h1 className="sr-only">Pictorial. Main page</h1>

      <section>
        <h2 className="sr-only">Random pictures</h2>

        {randomPictures && <PictureList pictures={randomPictures} />}
      </section>
    </>
  );
};

export default MainPage;
