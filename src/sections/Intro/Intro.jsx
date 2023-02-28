import { meal } from '../../constants';
import { useRef } from 'react';
import { useState } from 'react';

import {BsFillPlayFill, BsFillPauseFill} from 'react-icons/bs';

import './Intro.css';


const Intro = () => {
  const [play, setPlay] = useState(false)
  const videoRef = useRef();

  const handlePlay = () => {
    setPlay((prevState) => !prevState)

    if(play){
      videoRef.current.pause()
    } else{
      videoRef.current.play()
    }
  }

  return (
    <div className='video-container'>
      <video src={meal} type = "video/mp4" loop muted controls = {false} ref = {videoRef} />
      <div className='video-overlay'>
        <div className='video-overlay-buttons' onClick={handlePlay}>
          {
            play ? <BsFillPauseFill style={{color:'white', fontSize:'50px'}} /> : <BsFillPlayFill  style={{color:'white', fontSize:'50px'}} />
          }
        </div>
      </div>
    </div>
  )
};

export default Intro;
