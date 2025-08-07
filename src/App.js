import "./App.css";
import "./style.css";
import { useState } from "react";
import MovieList from "./components/MovieList";

const App = () => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    const q = e.target.value;
    setQuery(q);
  };
  return (
    <div className="App p-2 bg-[#282c34]">
      <header className="App-header">
        <nav className="shadow-lg p-4 fixed top-0 left-0 w-full bg-[#282c34] backdrop-blur-md transition-transform duration-300 z-50">
          <div className="container grid grid-cols-3 items-center gap-4">
            <div className="flex items-center gap-1 text-xs text-gray-400">
              <span>API by</span>
              <a
                href="https://www.themoviedb.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={`${process.env.PUBLIC_URL}/LogoTMDB.svg`}
                  alt="TMDB Logo"
                  className="h-4 w-auto inline-block align-middle object-contain"
                />
              </a>
            </div>

            <div className="relative group">
              <h1 className="text-center text-xl sm:text-2xl md:text-3xl font-serif font-bold text-white cursor-pointer">
                Rival Movie
              </h1>
              <div className="absolute left-1/2 -translate-x-1/2 mt-2 bg-[#282c34] p-0.5 rounded-md flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <a
                  href="https://github.com/spectraVal"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/github-svgrepo-com.svg"
                    alt="GitHub spectraVal"
                    className="w-8 h-8 hover:scale-110 transition"
                  />
                </a>
                <a
                  href="https://www.instagram.com/_mrvlana/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/instagram-1-svgrepo-com.svg"
                    alt="Instagram _mrvlana"
                    className="w-8 h-8 hover:scale-110 transition"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/rival-maulana-107001377"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/linkedin-linked-in-svgrepo-com.svg"
                    alt="LinkedIn"
                    className="w-8 h-8 hover:scale-110 transition"
                  />
                </a>
              </div>
            </div>

            <input
              type="text"
              className="movie-search text-sm sm:text-base md:text-lg p-2 rounded-lg transition duration-150 focus-within:outline-none focus:ring-2 focus:ring-white  w-full max-w-xs sm:max-w-sm"
              placeholder="Search Movie..."
              onChange={handleSearch}
            />
          </div>
        </nav>
        <div className="pt-8">
          <MovieList query={query} />
        </div>
      </header>
      <footer className="fixed bottom-0 w-full bg-[#282c34] text-center text-xs text-white py-2 z-50">
        This product uses the{" "}
        <span>
          <a
            href="https://www.themoviedb.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            TMDB
          </a>
        </span>{" "}
        API but is not endorsed or certified by{" "}
        <span>
          <a
            href="https://www.themoviedb.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            TMDB
          </a>
        </span>
        .
      </footer>
    </div>
  );
};

export default App;
