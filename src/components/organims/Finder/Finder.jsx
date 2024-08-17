import { useInfiniteQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MovieContext } from '../../../contexts/movieProvider.js';
import { findMoviesService } from '../../../service/movies';
import CardsList from '../../molecules/CardsList/CardsList.jsx';
import FinderForm from '../../molecules/FinderForm.jsx';

const Finder = () => {
  const { state: { moviesFilter } } = useContext(MovieContext);
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  const getMovies = async ({ pageParam = 1 }) => {
        if(moviesFilter.trim().length === 0) {
            return [];
        } else {
            try {
                const results = await findMoviesService({
                    filter: moviesFilter,
                    language: i18n.language,
                    page: pageParam,
                });
                console.log('Resultados', results.results)
                return {
                    results: results.results,
                    nextPage: pageParam + 1,
                };
            } catch (error) {
            throw new Error(error.message);
            }
        }
    };

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery(
    {
        queryKey: ['movies', moviesFilter],
        queryFn: getMovies,
        initialPageParam: 1,
        getNextPageParam: (lastPage, pages) => {
            console.log('Proxima pagina',lastPage.nextPage)
            return lastPage.nextPage
        },
    }
  );

  useEffect(() => {
    if (language !== i18n.language) {
      setLanguage(i18n.language);
    }
  }, [language, i18n.language]);

  return status === 'loading' ? (
    <p>Loading...</p>
  ) : status === 'error' ? (
    <p>Error: {error.message}</p>
  ) : (
    <>
      <FinderForm />
      <CardsList
        list={data?.pages.flatMap(page => page.results) || []}
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
        isFetching={isFetching}
        isFetchingNextPage={isFetchingNextPage}
        error={error}
      />

    </>
  );
}

export default Finder;
