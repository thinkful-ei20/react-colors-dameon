import React from 'react';
import './colorBoxes.css';

export default function ColorBoxes(props){
   console.log(props.colors);
   let randomIndexNumber = Math.floor(Math.random()*4);
   console.log(randomIndexNumber);
    return (
  
   <div className="box" style={{backgroundColor: `${props.colors[randomIndexNumber]}`}}>red </div>
  )
}