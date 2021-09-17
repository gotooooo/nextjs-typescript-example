import {useEffect, useState} from "react";
import apiClient, { baseQuery } from "../utils/apiClient";
import {MovieDetail} from "../types/Movie";

const useFetchMovie = (title = "Iron%20Man"): [MovieDetail, any] => {
  const initalState: MovieDetail = {
    Title: "",
    Year: "",
    Rated: "",
    Released: "",
    Runtime: "",
    Genre: "",
    Director: "",
    Writer: "",
    Actors: "",
    Plot: "",
    Language: "",
    Country: "",
    Awards: "",
    Poster: "",
    Ratings: [],
    Metascore: "",
    imdbRating: "",
    imdbVotes: "",
    imdbID: "",
    Type: "",
    DVD: "",
    BoxOffice: "",
    Production: "",
    Website: "",
  }
  const [res, setRes] = useState<MovieDetail>(initalState);
  const [err, setErr] = useState(null);

  useEffect(() => {
    const titleQuery = title !== "" ? `&t=${title}` : "Iron%20Man";
    const fetch = async () => {
      await apiClient.get(`${baseQuery}${titleQuery}`)
        .then((res) => {
          setRes(res.data)
        })
        .catch((err) => {
          setErr(err);
        });
    }
    fetch();
  }, [])

  return [res, err]
}

export default useFetchMovie;
