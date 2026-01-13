import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const SecondaryContainer = () => {
    const nowPlaying = useSelector(state => state.movies.nowPlaying)
    return (
        <div className="bg-black bg-opacity-45">
            <MoviesList title="Now Playing" movies={nowPlaying} />
            <MoviesList title="Now Playing" movies={nowPlaying} />
            <MoviesList title="Now Playing" movies={nowPlaying} />
        </div>
    );
}

export default SecondaryContainer;