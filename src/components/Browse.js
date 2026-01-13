import Header from "./Header";
import { useEffect } from "react";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainController from "./Movies/MainController";
import SecondaryContainer from "./Movies/SecondaryContainer";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";

const Browse = () => {
  const { getNowPlayingMovies } = useNowPlayingMovies();
  const {showGptSearch} = useSelector((state) => state.gptSearch);
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
  return (
    <div className="bg-black bg-opacity-65 h-screen overflow-x-hidden overflow-y-auto">
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainController />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
