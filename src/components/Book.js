import React from 'react'

const Book = ({book}) => {
    return (
        <div className="player player1" style={{ backgroundImage: `url(${book.image})` }}>
                <div className="imgBx">
                    <div className="text-block">
                        <h4 id="text">Author: {book.author}</h4>
                        <h5>Book: {book.book}</h5>
                    </div>
                </div>
            </div> 
    )
}

export default Book
