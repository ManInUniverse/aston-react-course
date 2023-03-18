import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => document.documentElement.scrollTo(0, 0), [pathname]);
};

