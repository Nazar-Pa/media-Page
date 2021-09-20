import React from 'react'

const Film = ({film}) => {
    return (
        <div className="player player1" style={{ backgroundImage: `url(${film.image})` }}>
                <div className="imgBx">
                    <div className="text-block">
                        <h4 id="text">Movie: {film.film}</h4>
                        <h5>Genre: {film.genre}</h5>
                    </div>
                </div>
            </div> 
    )
}

export default Film
