import apiKey from "./key";

export default [
  {
    title: "Netflix Originals",
    url: `/discover/tv?api_key=${apiKey}&with_networks=213`,
  },
  {
    title: "Trending Now",
    url: `/trending/all/week?api_key=${apiKey}&language=en-US`,
  },
  {
    title: "Top Rated",
    url: `/movie/top_rated?api_key=${apiKey}&language=en-US`,
  },
  {
    title: "Action Movies",
    url: `/discover/movie?api_key=${apiKey}&with_genres=28`,
  },
  {
    title: "Comedy Movie",
    url: `/discover/movie?api_key=${apiKey}&with_genres=35`,
  },
  {
    title: "Horror Movies",
    url: `/discover/movie?api_key=${apiKey}&with_genres=27`,
  },
  {
    title: "Romance Movies",
    url: `/discover/movie?api_key=${apiKey}&with_genres=10749`,
  },
  {
    title: "Documentaries",
    url: `/discover/movie?api_key=${apiKey}&with_genres=99`,
  },
];
