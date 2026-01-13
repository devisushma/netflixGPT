import MovieCard from "./MovieCard";

const MoviesList = ({ title, movies }) => {
    return (
        <div >
            <h1 className="text-lg text-white my-2 mx-4">{title}</h1>
            <div className="flex overflow-x-scroll">
                {
                    movies.map((movie) => {
                        return (
                            <MovieCard key={movie?.id} poster={movie?.poster_path} />
                        )
                    })
                }
            </div>
        </div>
    );
}

export default MoviesList;