import { useDispatch } from "react-redux";
import { api_options } from "../utils/constants";
import { addNowPlaying } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      api_options
    );
    const json = await data.json();
    dispatch(addNowPlaying(json.results));
  };

  return { getNowPlayingMovies };
};

export default useNowPlayingMovies;
