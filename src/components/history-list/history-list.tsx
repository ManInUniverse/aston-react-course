import { Link } from 'react-router-dom';

import { formatDateTime } from '../../utils';
import { User } from '../../types/user';

type Props = {
  historyItems: User['history'];
};

export const HistoryList = ({ historyItems }: Props) => {
  return (
    <ul className="rounded-lg border border-neutral-200">
      {historyItems.map(({ date, body }) => (
        <li key={date} className="border-b border-b-neutral-200 last:border-none group">
          <Link
            to={`/search?q=${body}`}
            title={`"${body}"`}
            className="p-4 hover:bg-neutral-200 hover:shadow-lg transition flex group-first:rounded-t-lg group-last:rounded-b-lg"
          >
            <span className="mr-5">{`${formatDateTime(date, 'YYYY MMMM D, HH:mm:ss')}`}</span>

            <span>{`"${body}"`}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};
