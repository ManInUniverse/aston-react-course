import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { useSearchPicturesQuery } from '../../services/picture-api';
import { useDebounce } from '../../hooks/useDebounce';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { getUserData } from '../../store/slices/user-slice/selectors';
import { addToHistoryAction } from '../../store/user-api-actions';

import { SearchForm } from '../search-form/search-form';

const SUGGESTIONS_COUNT = 5;

export const Search = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const userData = useAppSelector(getUserData);
  const [dropdown, setDropdown] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const debouncedSearchValue = useDebounce(searchValue);
  const { isLoading, data: results } = useSearchPicturesQuery(
    {
      keyword: debouncedSearchValue,
      count: SUGGESTIONS_COUNT,
    },
    {
      skip: debouncedSearchValue.length < 3,
    }
  );

  useEffect(() => {
    setDropdown(debouncedSearchValue.length >= 3 && results?.length! > 0);
  }, [debouncedSearchValue, results]);

  useEffect(() => {
    setDropdown(false);
    setSearchValue('');
  }, [location]);

  const handleFormSubmit = () => {
    if (userData) {
      dispatch(
        addToHistoryAction({
          email: userData.email,
          body: searchValue.trim(),
        })
      );
    }

    navigate(`/search?q=${searchValue}`);
  };

  return (
    <div className="relative">
      <SearchForm
        onFormSubmit={handleFormSubmit}
        onInputChange={setSearchValue}
        inputValue={searchValue}
      />

      {dropdown && (
        <ul className="absolute inset-x-0 bg-white top-full shadow-md z-[3] overflow-hidden rounded-lg">
          {isLoading && <p className="text-center">Loading...</p>}

          {results &&
            results.map(({ id, description }) => (
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
      )}
    </div>
  );
};
