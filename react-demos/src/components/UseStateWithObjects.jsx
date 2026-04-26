import { useState } from "react";

const UseStateWithObjects = () => {
  const [movies, setMovies] = useState({
    title: "Equalizer 3",
    ratings: 7,
  });

  const updateRatingHandler = () => {
    setMovies({ ...movies, ratings: 5 });
  };

  return (
    <div>
      <h1>Movie: {movies.title}</h1>
      <h2>Ratings {movies.ratings}</h2>
      <button onClick={updateRatingHandler}>Update Rating</button>
    </div>
  );
};
export default UseStateWithObjects;
