import { useState } from "react";

const UseStateWithArrayOfObject = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Spider Man",
      ratings: 3,
    },
    {
      id: 2,
      title: "Super Man",
      ratings: 6,
    },
  ]);

  const handleRatings = () => {
    const updated = movies.map((m) =>
      m.ratings === 6 ? { ...m, ratings: 1 } : m,
    );
    setMovies(updated);
  };

  const handleName = () => {
    setMovies(
      movies.map((m) => (m.id === 1 ? { ...m, title: "Wonder Woman" } : m)),
    );
  };

  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id}>
          <p>Title: {movie.title}</p>
          <p>Ratings: {movie.ratings}</p>
        </div>
      ))}
      <button onClick={handleRatings}>Change Rating</button>
      <button onClick={handleName}>Change Name</button>
    </div>
  );
};
export default UseStateWithArrayOfObject;
