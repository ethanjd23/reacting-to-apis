import React, { useEffect, useState } from "react";
import Film from "./components/Film";
import Person from "./components/Person";

const App = () => {
  const [films, setFilms] = useState([]);
  const [people, setPeople] = useState([]);
  const [loadFilms, setLoadFilms] = useState(false);
  const [loadPeople, setLoadPeople] = useState(false);

  let handleLoadFilms = () => {
    setLoadPeople(false);
    setLoadFilms(true);
  };

  let handleLoadPeople = () => {
    setLoadFilms(false);
    setLoadPeople(true);
  };

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/films") // fetching films
      .then((res) => res.json())
      .then((allFilms) => setFilms(allFilms));

    fetch("https://ghibliapi.herokuapp.com/people") // fetching people
      .then((res) => res.json())
      .then((allPeople) => setPeople(allPeople));
  }, []);

  if (loadFilms === false && loadPeople === false) {
    return (
      <>
        <button
          className="btn btn-success btn-lg col-6"
          onClick={handleLoadFilms}
        >
          Load Films
        </button>
        <button
          className="btn btn-success btn-lg col-6"
          onClick={handleLoadPeople}
        >
          Load People
        </button>
      </>
    );
  } else if (loadPeople === true) {
      return(
    <>
      <button
        className="btn btn-success btn-lg col-6"
        onClick={handleLoadFilms}
      >
        Load Films
      </button>
      <button
        className="btn btn-success btn-lg col-6"
        onClick={handleLoadPeople}
      >
        Load People
      </button>
      <div className="row justify-content-center">
        {people.map((person) => (
          <Person person={person} />
        ))}
      </div>
    </>
    )
  } else if (loadFilms === true) {
    return (
        <>
      <button
        className="btn btn-success btn-lg col-6"
        onClick={handleLoadFilms}
      >
        Load Films
      </button>
      <button
        className="btn btn-success btn-lg col-6"
        onClick={handleLoadPeople}
      >
        Load People
      </button>
      <div className="row justify-content-center">
        {films.map((film) => (
          <Film film={film} />
        ))}
      </div>
    </>
    )
  }
};

export default App;
