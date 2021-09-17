type Movie = {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

type MovieWithId = Movie & {
  id: number
}

type MovieForDisplay = {
  Title: string
  Year: string
  Poster: string
}

type Rating = {
  Source: string
  Value: string
}

type MovieDetail = {
  Title: string
  Year: string
  Rated: string
  Released: string
  Runtime: string
  Genre: string
  Director: string
  Writer: string
  Actors: string
  Plot: string
  Language: string
  Country: string
  Awards: string
  Poster: string
  Ratings: Rating[]
  Metascore: string
  imdbRating: string
  imdbVotes: string
  imdbID: string
  Type: string
  DVD: string
  BoxOffice: string
  Production: string
  Website: string
}

export type {
  Movie,
  MovieWithId,
  MovieForDisplay,
  MovieDetail
}
