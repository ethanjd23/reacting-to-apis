import React from 'react';


const Person = props => {

    return (
            <div className="col-4" key={props.person.id}>
              <div className="card shadow my-2">
                <div className="card-body">
                  <h4 className="card-title">{props.person.name}</h4>
                  <p className="card-text">
                    {props.person.age}, {props.person.gender}
                  </p>
                  <a target="null" href={props.person.url}>
                    go to JSON
                  </a>
                </div>
              </div>
            </div>
    )
}

export default Person;