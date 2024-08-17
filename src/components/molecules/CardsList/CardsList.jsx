import React from 'react';
import useInfiniteScroll from 'react-infinite-scroll-hook';
import MovieCard from '../../atoms/Card/MovieCard';
import Spinner from '../../atoms/Spinner/Spinner.jsx';
import styles from "./list.module.css";

const CardsList = ({
    list,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    error,
}) => {

        const [sentryRef] = useInfiniteScroll({
            loading: isFetchingNextPage || isFetching,
            hasNextPage,
            onLoadMore: fetchNextPage,
            // When there is an error, we stop infinite loading.
            // It can be reactivated by setting "error" state as undefined.
            disabled: !!error,
            // `rootMargin` is passed to `IntersectionObserver`.
            // We can use it to trigger 'onLoadMore' when the sentry comes near to become
            // visible, instead of becoming fully visible on the screen.
            rootMargin: '0px 0px 400px 0px',
          });
    return (
        <>
            <div className='row m-0'>
                {
                    list.map((item,pos)=>( <MovieCard
                                            movieInfo={item}
                                            className="col-xl-3 col-md-4 col-sm-6 col-xs-12 px-lg-5 px-md-4 px-3 py-md-4 py-3"
                                            key={pos} />))
                }
            </div>
            {(isFetchingNextPage || isFetching || hasNextPage) && (

                <div className={styles["spinner-container"]} ref={sentryRef}>
                     <Spinner />
                </div>
            )}
        </>
    );
}

export default CardsList;
