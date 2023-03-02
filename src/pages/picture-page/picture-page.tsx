import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { fetchPictureById } from '../../services/api';
import { Picture } from '../../types/picture';

export const PicturePage = () => {
  const { id } = useParams<{ id: string }>();
  const [picture, setPicture] = useState<Picture | null>(null);
  useEffect(() => {
    if (id) {
      fetchPictureById(id).then(setPicture);
    }
  }, [id]);

  return picture ? (
    <section className={`bg-[${picture.color}]`}>
      <h1 className="font-bold text-4xl text-center my-10 first-letter:uppercase">
        {picture.description}
      </h1>

      <img className="mx-auto" src={picture.urlRegular} alt={picture.description} />
    </section>
  ) : (
    <p className="text-center text-4xl font-bold">Loading...</p>
  );
};
