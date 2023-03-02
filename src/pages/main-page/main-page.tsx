import { useEffect, useState } from 'react';

import { fetchRandomPictures } from '../../services/api';
import { Pictures } from '../../types/picture';

import { PictureList } from '../../components/picture-list/picture-list';

export const MainPage = () => {
  const [randomPictures, setRandomPictures] = useState<Pictures>([]);
  useEffect(() => {
    fetchRandomPictures().then(setRandomPictures);
  }, []);

  return (
    <>
      <h1 className="font-bold text-4xl text-center my-10 sr-only">Pictorial. Main page</h1>

      <section>
        <h2 className="sr-only">Random pictures</h2>

        {randomPictures.length ? (
          <PictureList pictures={randomPictures} />
        ) : (
          <p className="text-center text-4xl font-bold">Loading...</p>
        )}
      </section>
    </>
  );
};
