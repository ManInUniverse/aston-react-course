import { Link } from 'react-router-dom';

import { AppRoute } from '../../const';

export const GuestNav = () => {
  return (
    <nav>
      <ul className="flex flex-wrap items-center">
        <li className="mr-6 last:mr-0 rounded-md border border-transparent">
          <Link
            to={AppRoute.SignIn}
            className="text-[#E9E9E9] hover:text-[#F9CC0B] text-xl p-2 transition block"
          >
            Sign in
          </Link>
        </li>

        <li className="mr-6 last:mr-0 rounded-md border border-[#F9CC0B]">
          <Link
            to={AppRoute.SignUp}
            className="text-[#E9E9E9] hover:text-[#F9CC0B] text-xl p-2 transition block"
          >
            Sign up
          </Link>
        </li>
      </ul>
    </nav>
  );
};
