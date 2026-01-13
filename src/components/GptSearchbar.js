import { useDispatch, useSelector } from "react-redux";
import { handleSearch, handleGptMovies } from "../utils/gptSearchSlice";
// import client from "../utils/openAI";
import ai from "../utils/openAI";
import { api_options } from "../utils/constants";

const GptSearchbar = () => {
  const { search } = useSelector((state) => state.gptSearch);
  const dispatch = useDispatch();
  const handleSearchChange = (e) => {
    dispatch(handleSearch(e.target.value));
  }
  const fetchMovieByName = async (movieName) => {
    const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`, api_options)
    const jsonData = await data.json()
    return jsonData.results;
  }

  const handleButtonClick = async () => {
    const gptQuery =
      "Act as movie recommendation system and suggest 5 movies for the query" +
      search +
      "only give me 5 movies, comma separated like the example result given ahead. Example: Mayabazar, siva, gundamma katha, sholay, Don";
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: gptQuery,
    });
    const moviesArr = response.text.split(",")
    const promises = moviesArr.map(movie => fetchMovieByName(movie))
    const moviesList = await Promise.all(promises)
    console.log(moviesList, "list")
    dispatch(handleGptMovies({
      gptMovies: moviesList,
      suggestions: response.text
    }))
  };
  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black bg-opacity-80 grid grid-cols-12 rounded-full overflow-hidden shadow-lg border border-gray-700"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          className="col-span-9 p-4 bg-transparent text-white focus:outline-none placeholder-gray-400 text-lg"
          type="text"
          value={search}
          onChange={handleSearchChange}
          placeholder="What would you like to watch today?"
        />
        <button
          className="col-span-3 py-3 px-6 bg-red-700 text-white font-bold text-lg hover:bg-red-800 transition-colors duration-300 rounded-r-full"
          onClick={handleButtonClick}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchbar;
