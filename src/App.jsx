import React, { useEffect, useState } from 'react';

const App = () => {
    const [films, setFilms] = useState([]);
    const [people, setPeople] = useState([]);
    let filmHolder;
    let peopleHolder;

    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/films') // fetching films 
        .then(res => res.json())
        .then(allFilms => filmHolder = allFilms)
    }, []);

    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/people') // fetching people
        .then(res => res.json())
        .then(allPeople => peopleHolder = allPeople)  
    })

    function handleFilmClick() {
        setFilms(filmHolder);
    }

    function handlePeopleClick() {
        setPeople(peopleHolder);
    }


    return (
        <>
            <button className="btn btn-success btn-lg col-6" onClick={handleFilmClick}>Load Films</button>
            <button className="btn btn-success btn-lg col-6" onClick={handlePeopleClick}>Load People</button>
            <div className="row justify-content-center">
                {films.map(film =>(
                    <div className="card col-4" key={film.id}>
                        <div className="card shadow my-2">
                            <div className="card-body">
                                <h4 className="card-title">{film.title}</h4>
                                <p className="card-text">{film.description}</p>                            
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="row justify-content-center">
                {people.map(person =>(
                    <div className="card col-4" key={person.id}>
                        <div className="card shadow my-2">
                            <div className="card-body">
                                <h4 className="card-title">{person.name}</h4>
                                <p className="card-text">{person.age}, {person.gender}</p>
                                <a target="null" href={person.url}>go to JSON</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default App;