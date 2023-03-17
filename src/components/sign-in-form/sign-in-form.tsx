import { useState } from 'react';
import { ChangeEvent, FormEvent } from 'react';
import { Link } from 'react-router-dom';

import { SignInData } from '../../types/user';
import { AppRoute } from '../../const';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { signInAction } from '../../store/user-api-actions';
import { useAppSelector } from '../../hooks/useAppSelector';
import { getUserProcessingStatus } from '../../store/slices/user-slice/selectors';

import { Spinner } from '../spinner/spinner';

export const SignInForm = () => {
  const dispatch = useAppDispatch();
  const isUserProcessing = useAppSelector(getUserProcessingStatus);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [formData, setFormData] = useState<SignInData>({
    email: '',
    password: '',
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(signInAction(formData))
      .unwrap()
      .catch((error) => setErrorMessage(error.message));
  };

  return (
    <form onSubmit={handleFormSubmit} className="space-y-4">
      {errorMessage && <p className="text-red-600 text-center">{errorMessage}</p>}

      <div>
        <input
          onChange={handleInputChange}
          value={formData.email}
          className="rounded-lg block w-full p-2.5 bg-gray-700 border border-gray-600 placeholder-gray-400 text-white"
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          required
        />
        <label className="sr-only" htmlFor="email">
          Email
        </label>
      </div>

      <div>
        <input
          onChange={handleInputChange}
          value={formData.password}
          className="rounded-lg block w-full p-2.5 bg-gray-700 border border-gray-600 placeholder-gray-400 text-white"
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          required
        />
        <label className="sr-only" htmlFor="password">
          Password
        </label>
      </div>

      <button
        className="w-full text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5"
        type="submit"
        disabled={isUserProcessing}
      >
        {isUserProcessing ? <Spinner /> : 'Sign in'}
      </button>

      <p className="text-sm font-light text-gray-400">
        {"Don't have an account yet? "}
        <Link
          to={AppRoute.SignUp}
          className="font-medium hover:text-[#F9CC0B] hover:underline transition"
        >
          Sign up
        </Link>
      </p>
    </form>
  );
};
