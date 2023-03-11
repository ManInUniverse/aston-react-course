import { useState } from 'react';
import { ChangeEvent, FormEvent } from 'react';
import { Link } from 'react-router-dom';

import { SignUpData } from '../../types/user';
import { AppRoute } from '../../const';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { signUpAction } from '../../store/user-api-actions';

export const SignUpForm = () => {
  const dispatch = useAppDispatch();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [formData, setFormData] = useState<SignUpData>({
    name: '',
    email: '',
    password: '',
  });

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(signUpAction(formData))
      .unwrap()
      .catch((error) => setErrorMessage(error.message));
  };

  return (
    <form onSubmit={onFormSubmit} className="space-y-4">
      {errorMessage && <p className="text-red-600 text-center">{errorMessage}</p>}

      <div>
        <input
          onChange={onInputChange}
          value={formData.name}
          className="rounded-lg block w-full p-2.5 bg-gray-700 border border-gray-600 placeholder-gray-400 text-white"
          type="text"
          name="name"
          id="name"
          placeholder="Your name"
          minLength={2}
          required
        />
        <label className="sr-only" htmlFor="name">
          Your name
        </label>
      </div>

      <div>
        <input
          onChange={onInputChange}
          value={formData.email}
          className="rounded-lg block w-full p-2.5 bg-gray-700 border border-gray-600 placeholder-gray-400 text-white"
          type="email"
          name="email"
          id="email"
          placeholder="Email address"
          required
        />
        <label className="sr-only" htmlFor="email">
          Email address
        </label>
      </div>

      <div>
        <input
          onChange={onInputChange}
          value={formData.password}
          className="rounded-lg block w-full p-2.5 bg-gray-700 border border-gray-600 placeholder-gray-400 text-white"
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          minLength={8}
          required
        />
        <label className="sr-only" htmlFor="password">
          Password
        </label>
      </div>

      <button
        type="submit"
        className="w-1/2 text-yellow-300 hover:text-white border border-yellow-300 hover:bg-yellow-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        Sign up
      </button>

      <p className="text-sm font-light text-gray-400">
        {'Already have an account? '}
        <Link
          to={AppRoute.SignIn}
          className="font-medium hover:text-[#F9CC0B] hover:underline transition"
        >
          Sign in
        </Link>
      </p>
    </form>
  );
};
