import React, { Component } from 'react'
import AllBooksBtn from './AllBooksBtn'
import gabriel from '../images/gabriel.jpg'
import kiterunner from '../images/kiterunner.jpg'
import miceandmen from '../images/miceandmen.jpg'
import oldmanandsea from '../images/oldmanandsee.jpg'
import Book from './Book'

const books = [
    {id: 1, author: 'Gabriel Garcia Marquez', image: gabriel, book: 'Chronicle of a Death Foretold'},
    {id: 2, author: 'Khaled Hosseini', image: kiterunner, book: 'The Kite Runner'},
    {id: 3, author: 'John Steinbeck', image: miceandmen, book: 'Of Mice and Men'},
    {id: 4, author: 'Ernest Hemingway', image: oldmanandsea, book: 'The Old Man and the Sea'}
]

class Books extends Component {
    render() {
        return (
            <div className="books">
            <h3 style={{fontSize: '17px'}}>Books <i className='bx bxs-book' style={{fontSize: '30px'}}></i></h3>
            {books.map((book) => (<Book book={book} key={book.id}/>))}

            
            <AllBooksBtn />              
    </div>
        )
    }
}

export default Books
