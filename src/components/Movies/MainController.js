import VideoController from "./VideoController";
import VideoInfo from "./VideoInfo";
import { useSelector } from "react-redux";

const MainController = () => {
    const movies = useSelector((store) => store?.movies?.nowPlaying);
    if (!movies) return;
    const mainMovie = movies[0]

    return (
        <div>
            <VideoController movieId={mainMovie.id} />
            <VideoInfo title={mainMovie.title} desc={mainMovie.overview} />
        </div>);
}

export default MainController;