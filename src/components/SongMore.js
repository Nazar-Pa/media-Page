import React, {  } from 'react'
import hiss from '../images/hiss.jpg'
import eminem from '../images/eminem.jpg'
import amy from '../images/bg.jpg'
import rihanna from '../images/rihanna.jpg'
import hissKarma from '../songs/HissKarma.mp3'


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
      artist: 'Amy Winehouse',
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


class SongMore extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      playing: false,
      order: 0
    }
  }

  nextSong = () => {
    const playPause = document.querySelector('.playPause')
    if(this.state.order<3){
    this.setState({order: this.state.order + 1, playing: false})
    playPause.classList.remove('active');
    } else {
      this.setState({order: 0, playing: false})
      playPause.classList.remove('active');
    }
  }
    

    prevSong = () => {
      const playPause = document.querySelector('.playPause')
      console.log(this.state.order)
      if(this.state.order<1){
        this.setState(
          {order: songs.length - 1, playing: false})
          playPause.classList.remove('active');
        
      } else {
        this.setState(
        {order: this.state.order - 1, playing: false})
        playPause.classList.remove('active');
      }   
      
    }
    
    playSong = () => {
      const audio = document.querySelector('audio');
      const playPause = document.querySelector('.playPause')
      this.setState({order: this.state.order, playing: true})
        audio.play();
        playPause.classList.add('active');
    }

    pauseSong = () => {
      const audio = document.querySelector('audio');
      const playPause = document.querySelector('.playPause')
      this.setState({order: this.state.order, playing: false})
        //setPlaying(false)
        audio.pause();
        playPause.classList.remove('active');
    }
    
    playMusic = () => {
        this.state.playing ? this.pauseSong() : this.playSong()
    }

    
  render() {  
  return (
    <div className="all-screens">
       <div className="container">
          <div className="image">
            <img src={songs[this.state.order].image} alt="" />
          </div>
          <div className="song-details">
          <h4>Artist: {songs[this.state.order].artist}</h4>
            <p>Song name: {songs[this.state.order].song}</p>
            
          </div>
          <div className="controls">
          <audio controls type="audio/mp3" src={songs[this.state.order].audio}>
                <source></source>
            </audio>
          <div className="btns">
            <span className="prev">
                <ion-icon name="play-back-outline" onClick={this.prevSong}></ion-icon>
            </span>
            <span className="playPause" onClick={this.playMusic}>
                <ion-icon name={this.state.playing ? "pause-outline" : "play-outline"}></ion-icon>
            </span>
            <span className="next">
                <ion-icon name="play-forward-outline" onClick={this.nextSong}></ion-icon>
            </span>
        </div>
          </div>
        </div>     
    </div>
  )
  }
}

export default SongMore
