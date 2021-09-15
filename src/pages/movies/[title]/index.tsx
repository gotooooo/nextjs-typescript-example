import type { NextPage } from 'next'
import Head from 'next/head'
import styles from './index.module.scss'
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import useFetchMovie from "../../../hooks/useFetchMovie";
import {useEffect} from "react";
import MovieDetail from "../../../components/Movies/MovieDetail";

const MovieByTitle: NextPage = ({ title }: InferGetServerSidePropsType<typeof getServerSideProps>) => {

  const [fetch, res, err] = useFetchMovie(title);

  useEffect(() => {
    fetch();
  }, [fetch])

  useEffect(() => {
    if (!err) return;
    console.log(err);
  }, [err])

  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={`${title}`} />
      </Head>
      <MovieDetail
        Title={res.Title}
        Year={res.Year}
        Rated={res.Rated}
        Released={res.Released}
        Runtime={res.Runtime}
        Genre={res.Genre}
        Director={res.Director}
        Writer={res.Writer}
        Actors={res.Actors}
        Plot={res.Plot}
        Language={res.Language}
        Country={res.Country}
        Awards={res.Awards}
        Poster={res.Poster}
        Ratings={res.Ratings}
        Metascore={res.Metascore}
        imdbRating={res.imdbRating}
        imdbVotes={res.imdbVotes}
        imdbID={res.imdbID}
        Type={res.Type}
        DVD={res.DVD}
        BoxOffice={res.BoxOffice}
        Production={res.Production}
        Website={res.Website}
      />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  return {
    props: {
      title: query["title"]
    },
  };
}

export default MovieByTitle
