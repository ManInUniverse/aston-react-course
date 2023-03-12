import { PropsWithChildren } from 'react';

export const UserNavItem = ({ children }: PropsWithChildren) => {
  return <li className="mr-6 last:mr-0 rounded-md border border-transparent">{children}</li>;
};
