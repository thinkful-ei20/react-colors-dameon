import React from 'react';
import './colors.css';
import ColorBoxes from './colorBoxes';

const NEWCOLORARRAY=["blue","green","red","yellow","orange","purple","pink","teal","grey","brown","black","white","teal","burgundy","turquoise"];

export default class Colors extends React.Component {
  constructor(props){
    super(props);
      this.state = {
      colors: ["blue","green","red","orange"],
        
      }
      this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(num) {
    
      let randomIndexNumber = Math.floor(Math.random()*15);
      const colors = this.state.colors;
      colors[num] = NEWCOLORARRAY[randomIndexNumber];
      this.setState({colors})
      console.log("colors:",...colors);
    
    }
    render(){
    return (
      <div className='container'>
      <ColorBoxes  colors={this.state.colors} onClick={this.handleClick} />
      </div>
    )
  }
}
