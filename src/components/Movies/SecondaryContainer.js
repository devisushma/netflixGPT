import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const SecondaryContainer = () => {
  const nowPlaying = useSelector((state) => state.movies.nowPlaying);
  return (
    <div className="bg-black bg-opacity-45">
      {nowPlaying ? (
        <>
          <MoviesList title="Now Playing" movies={nowPlaying} />
          <MoviesList title="Now Playing" movies={nowPlaying} />
          <MoviesList title="Now Playing" movies={nowPlaying} />
        </>
      ) : <p>LOADING...</p>}
    </div>
  );
};

export default SecondaryContainer;
