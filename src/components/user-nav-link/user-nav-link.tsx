import { PropsWithChildren } from 'react';
import { To } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const setActive = ({ isActive }: { isActive: boolean }) =>
  `${
    isActive ? 'text-[#F9CC0B]' : 'text-[#E9E9E9]'
  } hover:text-[#F9CC0B] text-xl p-2 transition block relative`;

type Props = PropsWithChildren<{
  to: To;
  title?: string;
}>;

export const UserNavLink = ({ to, children, title }: Props) => {
  return (
    <NavLink to={to} className={setActive} title={title}>
      {children}
    </NavLink>
  );
};
