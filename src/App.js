import "./App.css";
import "./style.css";
import { useState } from "react";
import MovieList from "./components/MovieList";
import TitleWithIcons from "./components/TitleWithIcon";

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

            <div className="flex justify-center">
              <TitleWithIcons />
            </div>

            <input
              type="text"
              className="movie-search text-sm sm:text-base md:text-lg p-2 rounded-lg transition duration-150 focus-within:outline-none focus:ring-2 focus:ring-white  w-full max-w-xs sm:max-w-sm focus:drop-shadow-[0_0_6px_rgba(0,183,255,0.6)]"
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
