import { Pictures } from '../../types/picture';

import { PictureCard } from '../picture-card/picture-card';

type Props = {
  pictures: Pictures;
};

export const PictureList = ({ pictures }: Props) => {
  return (
    <ul className="grid grid-cols-fluid justify-center gap-5">
      {pictures.map((picture) => (
        <li key={picture.id}>
          <PictureCard picture={picture} />
        </li>
      ))}
    </ul>
  );
};
