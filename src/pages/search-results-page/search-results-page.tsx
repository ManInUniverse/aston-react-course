import { useSearchParams } from 'react-router-dom';

import { useSearchPicturesQuery } from '../../services/picture-api';

import { PictureList } from '../../components/picture-list/picture-list';

const SEARCH_RESULTS_COUNT = 20;

export const SearchResultsPage = () => {
  let [searchParams] = useSearchParams();
  const { isLoading, data: results } = useSearchPicturesQuery({
    keyword: searchParams.get('q') as string,
    count: SEARCH_RESULTS_COUNT,
  });

  if (isLoading) {
    return <p className="text-center text-3xl my-10">Loading...</p>;
  }

  return (
    <section>
      <h1 className="text-center text-3xl my-6">{`Search results for "${searchParams.get(
        'q'
      )}"`}</h1>
      ;{results && <PictureList pictures={results} />}
    </section>
  );
};
