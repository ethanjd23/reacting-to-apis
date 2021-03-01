import React from "react";

const Film = props => {
  return (
    <div className="col-4" key={props.film.id}>
      <div className="card shadow my-2">
        <div className="card-body">
          <h4 className="card-title">{props.film.title}</h4>
          <p className="card-text">{props.film.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Film;
