import React from 'react'
import myWonderfulImage from "../../imageInSrc.jpg"

const Second = () => {
    return (
        <div style={{border:"solid 1px black",maxWidth:"100vw"}}>
           <img src={myWonderfulImage} alt ='myImage'  style={{width: 200, height: 200}}/>
        </div>
    )
}

export default Second
