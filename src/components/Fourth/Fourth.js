import React from 'react'
import video from '../../videos/myVideo.mp4.mp4'

const Fourth = () => {
    return (
        
    <video width="320" height="240" controls >
        <source src={video} type="video/mp4"/>
    </video>
            
    )
}

export default Fourth
