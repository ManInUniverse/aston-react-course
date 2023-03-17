import { Link } from 'react-router-dom';

import { Pictures } from '../../types/picture';

type Props = {
  results: Pictures;
};

export const SearchResultsList = ({ results }: Props) => {
  return (
    <ul>
      {results.map(({ id, description }) => (
        <li key={id}>
          <Link
            to={`/pictures/${id}`}
            className="py-2 px-4 hover:bg-slate-500 hover:text-white transition-colors block first-letter:uppercase"
          >
            {description}
          </Link>
        </li>
      ))}
    </ul>
  );
};
