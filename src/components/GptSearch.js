import { useSelector } from "react-redux";
import GptSearchbar from "./GptSearchbar";
import MovieCard from "./Movies/MovieCard";

const GptSearch = () => {
  const { gptMovies } = useSelector((state) => state.gptSearch);
  if (!gptMovies) return;
  const containsArray = gptMovies.some(Array.isArray);
  let moviesArr = gptMovies;
  if (containsArray) moviesArr = gptMovies.flat();
  return (
    <div>
      <img
        className="absolute -z-30 top-0 h-screen w-screen"
        src="https://mustafaselman.github.io/001-netflix-surveyform/background_image.jpg"
        alt="logo"
      />
      <GptSearchbar />
      <div className="flex flex-wrap">
        {moviesArr.map((movie) => {
          return (
            <div className="w-[10%]">
              <MovieCard key={movie?.id} poster={movie?.poster_path} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GptSearch;
