import Link from "next/link";
import Image from "next/image";
import { MovieForDisplay } from "../../types/Movie";
import styles from "./Movie.module.scss";

const Movie = (props: MovieForDisplay) => {
  const { Title, Poster, Year } = props;

  const image = Poster === "N/A"
    ? <span>image not found</span>
    : <Image
      height={300}
      width={200}
      layout='fixed'
      alt={`The movie titled: ${Title}`}
      src={Poster}
    />

  return (
    <div className={styles.movie}>
      <Link href="/movies/[title]" as={`/movies/${Title}`}>
        <a className={styles.title}>
          <div>
            {image}
          </div>
          {Title} <span className={styles.year}>({Year})</span>
        </a>
      </Link>
    </div>
  )
}

export default Movie;
