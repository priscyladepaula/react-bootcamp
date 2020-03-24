import React, { useState, useEffect } from 'react'
import './style.css'

export default function Card() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/films/')
            .then(res => res.json())
            .then(data => {
                setMovies(data)
            }).catch(error => console.log(error));
    })

    return (
        <div className="container">
            {movies.map(({id, title, description}) =>(
                <div key={id} id="card">
                    <div id="titleMovie">{title}</div>
                    <div id="text">{description}</div>
                </div>
            ))}
        </div>
    )
}