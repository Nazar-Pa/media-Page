import React, { Component, useState } from 'react'
import hissKarma from '../songs/HissKarma.mp3'
import AllSongsBtn from './AllSongsBtn'
import hiss from '../images/hiss.jpg'
import eminem from '../images/eminem.jpg'
import rihanna from '../images/rihanna.jpg'
import amy from '../images/bg.jpg'

import Song from './Song'

const songs = [
    {
        id: 1,
        artist: 'Hiss',
        song: 'Karma',
        audio: hissKarma,
        image: hiss,

    },
    {
        id: 2,
        artist: 'Eminem',
        song: 'Lose yourself',
        audio: hissKarma,
        image: eminem,
    },
    {
        id: 3,
        artist: 'My Winehouse',
        song: 'Black or white',
        audio: hissKarma,
        image: amy,
    },
    {
        id: 4,
        artist: 'Rihanna',
        song: 'Umbrella',
        audio: hissKarma,
        image: rihanna,
    }
]



function Songs() {



    return (
        <div className="songs">
            <h3 style={{ fontSize: '19px', fontWeight: '1000' }}>Songs <i className='bx bxs-music' style={{ fontSize: '30px' }}></i></h3>
            {songs.map((song) => (<Song song={song} key={song.id}/>))}

            <AllSongsBtn />

        </div>
    )
}


export default Songs

