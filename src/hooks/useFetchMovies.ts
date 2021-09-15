import {useEffect, useState} from "react";
import apiClient, { baseQuery } from "../utils/apiClient";
import { Movie, MovieWithId} from "../types/Movie";

const useFetchMovies = (): [(input: string) => void, MovieWithId[], any, () => void] => {
  const [res, setRes] = useState<MovieWithId[]>([]);
  const [err, setErr] = useState<any>(null);
  const [keyword, setKeyword] = useState("man");

  const updateKeyword = (input: string) => {
    setKeyword(input)
  }

  const resetErr = () => {
    setErr(null);
  }

  useEffect(() => {
    const keywordQuery = keyword !== "" ? `&s=${keyword}` : "&s=man";
    const fetch = async () => {
      await apiClient.get(`${baseQuery}${keywordQuery}`)
        .then((res) => {
          if (res.data.Response === "False") {
            setErr("Movies Not Found");
          }
          if (res.data.Response === "True") {
            setRes(res.data.Search.map((movie: Movie, index: number) => {
              return {
                ...movie,
                id: index + 1,
              }
            }));
          }
        })
        .catch((err) => {
          setErr(err);
        });
    }
    fetch();
  }, [keyword])

  return [updateKeyword, res, err, resetErr]
}

export default useFetchMovies;
