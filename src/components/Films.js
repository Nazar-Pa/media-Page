import React from 'react'
import AllFilmsBtn from './AllFilmsBtn';
import Film from './Film'
import interstellar from '../images/interstellar.jpg'
import intouchables from '../images/intouchables.jpg'
import shutterisland from '../images/shutterisland.jpg'
import vendetta from '../images/vendetta.jpg'

const films = [
    {id: 1, film: 'Interstellar', image: interstellar, genre: 'Sci-fi/Adventure'},
    {id: 2, film: 'Intouchables', image: intouchables, genre: 'Comedy/Drama'},
    {id: 3, film: 'Shutter Island', image: shutterisland, genre: 'Thriller/Mystery'},
    {id: 4, film: 'V for Vendetta', image: vendetta, genre: 'Action/Thriller'}
]


const Films = () => {


    return (
        <div className="films">
            <h3 style={{fontSize: '17px'}}>Films <i class='bx bx-movie-play' style={{fontSize: '30px'}}></i></h3>
            {films.map((film) => (<Film film={film} key={film.id}/>))}

            <AllFilmsBtn/>       
        
    </div>
    )
}

export default Films
