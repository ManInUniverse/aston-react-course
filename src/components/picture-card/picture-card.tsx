import { Link } from 'react-router-dom';

import { Picture } from '../../types/picture';

type Props = {
  picture: Picture;
};

export const PictureCard = ({ picture }: Props) => {
  return (
    <div className="border border-gray-200 rounded-lg shadow-md overflow-hidden">
      <Link to={`/pictures/${picture.id}`}>
        <img
          className="rounded-lg h-[300px] w-full object-cover hover:scale-125 transition-transform duration-500"
          src={picture.urlSmall}
          alt={picture.description}
        />
      </Link>
    </div>
  );
};
