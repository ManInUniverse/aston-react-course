import { Navigate } from 'react-router-dom';

import { AppRoute, AuthStatus } from '../../const';
import { useAppSelector } from '../../hooks/useAppSelector';
import { getAuthStatus } from '../../store/slices/user-slice/selectors';

import { Logo } from '../../components/logo/logo';
import { SignInForm } from '../../components/sign-in-form/sign-in-form';

const SignInPage = () => {
  const authStatus = useAppSelector(getAuthStatus);

  if (authStatus === AuthStatus.Auth) {
    return <Navigate to={AppRoute.Main} />;
  }

  return (
    <div className="bg-[#01012A] min-h-screen flex flex-col">
      <div className="container mx-auto p-6 flex-grow flex flex-col items-center">
        <div className="mb-8">
          <Logo />
        </div>

        <section className="w-[350px] p-6 bg-gray-800 rounded-lg border border-gray-700">
          <h1 className="text-xl font-medium leading-tight tracking-tight md:text-2xl text-[#E9E9E9] mb-4 text-center">
            Sign in to your account
          </h1>

          <SignInForm />
        </section>
      </div>
    </div>
  );
};

export default SignInPage;
