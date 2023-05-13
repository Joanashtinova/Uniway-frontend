import React from 'react'

function Video(props) {
  return (
    <div>
        <h1>{props.title}</h1>
        <img src={props.image} 
        />
    </div>
  )
}

export default Video; 