import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { fetchPictureById } from '../../services/api';
import { Picture } from '../../types/picture';

export const PicturePage = () => {
  const { id } = useParams<{ id: string }>();
  const [currentPicture, setCurrentPicture] = useState<Picture | null>(null);
  useEffect(() => {
    if (id) {
      fetchPictureById(id).then((picture) => setCurrentPicture(picture));
    }
  }, [id]);

  return currentPicture ? (
    <section className={`bg-[${currentPicture.color}]`}>
      <h1 className="font-bold text-4xl text-center my-10 first-letter:uppercase">
        {currentPicture.description}
      </h1>

      <img className="mx-auto" src={currentPicture.urlRegular} alt={currentPicture.description} />
    </section>
  ) : (
    <p className="text-center text-4xl font-bold">Loading...</p>
  );
};
