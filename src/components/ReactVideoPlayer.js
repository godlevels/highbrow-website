import React from 'react'
import { DefaultPlayer as Video } from 'react-html5video';
import AboutVideo from '../img/aboutpage/video.mp4'
import 'react-html5video/dist/styles.css'

const ReactVideoPlayer = () => { 
  return (
    <Video autoplay loop>
        <source src={AboutVideo} type='video/webm' />
    </Video>
  )
}

export default ReactVideoPlayer