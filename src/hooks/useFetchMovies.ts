import {useEffect, useState} from "react";
import apiClient, { baseQuery } from "../utils/apiClient";
import { Movie, MovieWithId} from "../types/Movie";

const useFetchMovies = (): [(input: string) => void, MovieWithId[], any] => {
  const [res, setRes] = useState<MovieWithId[]>([]);
  const [err, setErr] = useState<any>(null);
  const [keyword, setKeyword] = useState("man");

  const searchByKeyword = (input: string) => {
    setKeyword(input)
  }

  useEffect(() => {
    const keywordQuery = keyword !== "" ? `&s=${keyword}` : "&s=man";
    const fetch = async () => {
      await apiClient.get(`${baseQuery}${keywordQuery}`)
        .then((res) => {
          if (res.data.Response === "True") {
            setErr(null);
            setRes(res.data.Search.map((movie: Movie, index: number) => {
              return {
                ...movie,
                id: index + 1,
              }
            }));
          } else {
            setErr("Movies Not Found");
          }
        })
        .catch((err) => {
          setErr(err);
        });
    }
    fetch();
  }, [keyword])

  return [searchByKeyword, res, err]
}

export default useFetchMovies;
