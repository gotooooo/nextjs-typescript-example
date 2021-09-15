import Link from "next/link";
import Image from "next/image";
import { MovieDetail } from "../../types/Movie";
import styles from "./MovieDetail.module.scss";

const Movie = (props: MovieDetail) => {
  const { Title, Poster, Year, Runtime, Genre, Language, Actors, Director, Writer, Rated, Country } = props;

  const image = Poster === "N/A"
    ? <span>image not found</span>
    : <Image
      height={300}
      width={200}
      layout='fixed'
      alt={`The movie titled: ${Title}`}
      src={Poster}
    />

  const content = !Title
    ? <div>loading...</div>
    : (
      <div>
        <h2>{Title}</h2>
        {image}
        <div>Year: {Year}</div>
        <div>Runtime: {Runtime}</div>
        <div>Genre: {Genre}</div>
        <div>Language: {Language}</div>
        <div>Actors: {Actors}</div>
        <div>Director: {Director}</div>
        <div>Writer: {Writer}</div>
        <div>Rated: {Rated}</div>
        <div>Country: {Country}</div>
      </div>
    )

  return (
    <div className={styles.main}>
      <Link href="/">戻る</Link>
      {content}
    </div>
  )
}

export default Movie;
