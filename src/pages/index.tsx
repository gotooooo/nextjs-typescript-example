import type { NextPage } from 'next'
import Head from 'next/head'
import {ChangeEvent, KeyboardEvent, useEffect, useState} from "react";
import useFetchMovies from "../hooks/useFetchMovies";
import Movie from "../components/Movies/Movie";
import styles from "./index.module.scss";

const Home: NextPage = () => {
  const [updateKeyword, res, err, resetErr] = useFetchMovies();
  const [keyword, setKeyword] = useState("man");

  useEffect(() => {
    if (!err) return;
    console.log(err);
  }, [err])

  useEffect(() => {
    resetErr();
    if (!res) return;
  }, [res])

  const movies = res.map((movie) => {
    console.log(movie.Poster);
    return (
      <div key={movie.id}>
        <Movie Title={movie.Title} Poster={movie.Poster} Year={movie.Year} />
      </div>
    )
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  }

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      updateKeyword(keyword);
    }
  }

  return (
    <div >
      <Head>
        <title>TOP</title>
        <meta name="description" content="top" />
      </Head>
      <main>
        <div className={styles.search}>
          <label>キーワード検索</label>
          <input
            className={styles.input}
            type="text"
            value={keyword}
            onChange={ (e) => handleChange(e) }
            onKeyPress={(e) => handleKeyPress(e) } />
          <span className={styles.error}>{err}</span>
        </div>
        <div className={styles.list}>
          {movies}
        </div>
      </main>
    </div>
  )
}

export default Home
