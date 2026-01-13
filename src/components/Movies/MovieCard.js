import { POSTER_URL } from "../../utils/constants";
const MovieCard = ({ poster }) => {
    return (
        <div>
            <img alt="movie+logo" src={POSTER_URL + poster} className="pt-2 pr-2" />
        </div>);
}

export default MovieCard;