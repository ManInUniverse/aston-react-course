import { useSearchParams } from 'react-router-dom';

import { useSearchPicturesQuery } from '../../services/picture-api';

import { PictureList } from '../../components/picture-list/picture-list';

const SEARCH_RESULTS_COUNT = 20;

const SearchResultsPage = () => {
  let [searchParams] = useSearchParams();
  const {
    isError,
    isLoading,
    data: results,
  } = useSearchPicturesQuery({
    keyword: searchParams.get('q') as string,
    count: SEARCH_RESULTS_COUNT,
  });

  if (isLoading) {
    return <p className="text-center text-3xl my-10">Loading...</p>;
  }

  if (isError) {
    return <p className="text-center text-3xl my-10">Failed to get data from server</p>;
  }

  return (
    <section>
      <h1 className="text-center text-3xl my-6">
        {`Search results for "${searchParams.get('q')}"`}
      </h1>

      {results &&
        (results.length ? (
          <PictureList pictures={results} />
        ) : (
          <p className="text-center text-xl my-10">{"Sorry, but we didn't find anything."}</p>
        ))}
    </section>
  );
};

export default SearchResultsPage;
