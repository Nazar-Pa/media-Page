import React, { useState } from 'react'


const Song = ({ song }) => {

    let [over, setOver] = useState(false);
    let [playing, setPlaying] = useState(false);


    let style1 = { display: 'block' }
    if (over) {
        style1.display = 'block'
    } else style1.display = 'none'



    const audio = document.querySelector('audio');



    const playSong = () => {
        setPlaying(true)
        audio.play();
    }

    const pauseSong = () => {
        setPlaying(false)
        audio.pause();
    }

    const playMusic = () => {

        setPlaying(true)
        audio.src = song.audio;
        console.log(playing)
        playing ? pauseSong() : playSong()

    }


    return (
        <div className="player player1" onMouseOver={() => setOver(true)} onMouseOut={() => setOver(false)} style={{ backgroundImage: `url(${song.image})` }}>
            <i className={playing ? 'bx bx-pause-circle' : 'bx bx-play-circle'} onClick={playMusic} id={song.id}></i>
            <div className="imgBx">
                <div className="text-block" style={style1}>
                    <h4 id="text">Artist: {song.artist}</h4>
                    <h5>Song: {song.song}</h5>
                </div>
            </div>
            <audio controls type="audio/mp3">
                <source></source>
            </audio>
        </div>
    )
}

export default Song



// const audioG = document.querySelector('audio');

//         console.log(id)
//         if (id == 1) {
//             audioG.pause();
//             const audio = document.getElementById('audio1');
//             if (!playing) {

//                 setPlaying(!playing);

//                 audio.play();
//                 console.log('play')

//             } else if (playing) {
//                 setPlaying(!playing);
//                 audio.pause();
//                 console.log('pause')
//             }


//         } else if (id == 2) {
//             audioG.pause();
//             const audio = document.getElementById('audio2');
//             if (!playing) {

//                 setPlaying(!playing);
//                 audio.play();
//                 console.log('play')

//             } else if (playing) {
//                 setPlaying(!playing);
//                 audio.pause();
//                 console.log('pause')
//             }
//         }
