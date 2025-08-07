import { useEffect, useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MovieCard from "./movieCard";
import { getMovieList } from "../api";

const MovieList = ({ query }) => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [isFetching, setIsFetching] = useState(false);
  const observer = useRef();

  useEffect(() => {
    const ids = movies.map((m) => m.id);
    const duplicates = ids.filter((id, idx) => ids.indexOf(id) !== idx);
    if (duplicates.length > 0) {
      console.warn("Duplicate IDs detected:", duplicates);
    }
  }, [movies]);

  useEffect(() => {
    setMovies([]);
    setPage(1);
  }, [query]);

  useEffect(() => {
    fetchMoreMovies();
    // eslint-disable-next-line
  }, [page, query]);

  const fetchMoreMovies = async () => {
    setIsFetching(true);
    const newMovies = await getMovieList(page, query);
    setMovies((prev) => {
      const movieMap = new Map();
      [...prev, ...newMovies].forEach((movie) => {
        movieMap.set(movie.id, movie);
      });
      return Array.from(movieMap.values());
    });
    setIsFetching(false);
  };

  const lastMovieRef = useCallback(
    (node) => {
      if (isFetching) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setPage((prev) => prev + 1);
        }
      });

      if (node) observer.current.observe(node);
    },
    [isFetching]
  );

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={movies.length} // ini trigger re-render saat list berubah
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 overflow-hidden"
      >
        {movies.map((movie, index) => (
          <motion.div
            ref={index === movies.length - 1 ? lastMovieRef : null}
            key={movie.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
          >
            <MovieCard movie={movie} />
          </motion.div>
        ))}
        {movies.length === 0 && !isFetching && (
          <p className="text-white flex items-center justify-center text-center col-span-full">
            No results found
          </p>
        )}
        {isFetching && (
          <div className="col-span-full flex justify-center items-center min-h-[60vh]">
            <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default MovieList;
