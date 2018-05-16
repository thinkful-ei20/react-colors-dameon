import React from 'react';
import './colors.css';
import ColorBoxes from './colorBoxes';

export default class Colors extends React.Component {
  constructor(props){
  super(props);

    this.state = {
      colors: ["blue","green","red","orange"]
    }

  }


  render(){

    const colors = this.state.colors.map((color, index) =>
    <ColorBoxes key={index} index={index} colors={this.state.colors} />
);
    return (
      <div className="container">
     
        {colors}
     
      </div>
    )
  }

}