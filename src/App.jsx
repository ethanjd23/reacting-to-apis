import React, { useEffect, useState } from 'react';

const App = () => {
    const [films, setFilms] = useState([]);
    let filmHolder;
    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/films')
        .then(res => res.json())
        .then(allFilms => filmHolder = allFilms)
    }, []);

    function handleFilmClick() {
        setFilms(filmHolder);
    }


    return (
        <>
            <button className="btn btn-success btn-lg" onClick={handleFilmClick}>Load Films</button>
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
        </>
    )
}

export default App;