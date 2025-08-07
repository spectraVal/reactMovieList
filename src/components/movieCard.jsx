const MovieCard = ({ movie }) => {
  return (
    <div className="text-center">
      <div className="text-xl m-4 font-semibold w-full truncate max-w-full">
        {movie.title}
      </div>
      <div className="relative overflow-hidden group rounded-lg">
        {movie.poster_path ? (
          <img
            src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`}
            alt="{movie.title}"
            className="transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="no-image">No Image</div>
        )}
        <div className="absolute text-sm inset-0 bg-black/40 text-white p-4 opacity-0 group-hover:opacity-100 transition duration-300">
          {movie.overview || "No overview available."}
        </div>
      </div>
      <div className="text-lg flex items-center justify-center gap-1 text-yellow-500 font-semibold">
        <img
          src="https://img.icons8.com/fluency/48/star--v1.png"
          alt="star--v1"
          className="w-6 h-6"
        />
        <span>
          {movie.vote_average ? movie.vote_average.toFixed(1) : "N/A"}
        </span>
      </div>
      <div className="text-lg">{movie.release_date}</div>
    </div>
  );
};

export default MovieCard;
