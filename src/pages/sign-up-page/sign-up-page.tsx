import { Link, Navigate } from 'react-router-dom';

import { AppRoute, AuthStatus } from '../../const';
import { useAppSelector } from '../../hooks/useAppSelector';
import { getAuthStatus } from '../../store/slices/user-slice/selectors';

import logo from '../../assets/logo.svg';
import human from '../../assets/human.jpg';

import { SignUpForm } from '../../components/sign-up-form/sign-up-form';

export const SignUpPage = () => {
  const authStatus = useAppSelector(getAuthStatus);

  if (authStatus === AuthStatus.Auth) {
    return <Navigate to={AppRoute.Main} />;
  }

  return (
    <div className="bg-[#01012A] min-h-screen flex flex-col">
      <div className="container mx-auto p-6 flex-grow flex flex-col items-center">
        <Link to={AppRoute.Main} className="hover:opacity-80 transition-all mb-8">
          <img className="h-[50px]" src={logo} alt="Pictorial" />
        </Link>

        <section className="w-[700px] p-6 bg-gray-800 rounded-lg border border-gray-700 flex">
          <div className="w-1/2">
            <h1 className="text-xl font-medium leading-tight tracking-tight md:text-2xl text-[#E9E9E9] mb-4 text-center">
              Create account
            </h1>

            <SignUpForm />
          </div>

          <div className="w-1/2 ml-5">
            <img className="rounded-lg" src={human} alt="Human" />
          </div>
        </section>
      </div>
    </div>
  );
};
