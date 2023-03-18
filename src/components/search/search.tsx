import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { useSearchPicturesQuery } from '../../services/picture-api';
import { useDebounce } from '../../hooks/useDebounce';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { getUserData } from '../../store/slices/user-slice/selectors';
import { addToHistoryAction } from '../../store/user-api-actions';

import { SearchForm } from '../search-form/search-form';
import { SearchResultsList } from '../search-results-list/search-results-list';

const SUGGESTIONS_COUNT = 5;

export const Search = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const userData = useAppSelector(getUserData);
  const [dropdown, setDropdown] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const debouncedSearchValue = useDebounce(searchValue);
  const {
    isError,
    isLoading,
    data: results,
  } = useSearchPicturesQuery(
    {
      keyword: debouncedSearchValue,
      count: SUGGESTIONS_COUNT,
    },
    {
      skip: debouncedSearchValue.length < 3,
    }
  );

  useEffect(() => {
    setDropdown(debouncedSearchValue.length >= 3);
  }, [debouncedSearchValue]);

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
        <div className="absolute inset-x-0 bg-white top-full shadow-md overflow-hidden rounded-lg">
          {isLoading && <p className="text-center">Loading...</p>}

          {isError && <p className="text-center">Failed to get data from server</p>}

          {results &&
            (results.length ? (
              <SearchResultsList results={results} />
            ) : (
              <p className="text-center">{"Sorry, but we didn't find anything."}</p>
            ))}
        </div>
      )}
    </div>
  );
};
