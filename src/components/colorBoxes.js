import React, {Component} from 'react';
import './colorBoxes.css';

export default class ColorBoxes extends Component{
  
  constructor(props){
    super(props);
  
      this.state = {
        colors: ["blue","green","red","orange"],
        bgColor:'red'
      }
      this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
      let randomIndexNumber = Math.floor(Math.random()*4);
      this.setState({
        bgColor: this.state.colors[randomIndexNumber]
      })
    }
    
    render() {

      return (
        <div>
          <button className="box"
            onClick={this.handleClick} 
            style={{backgroundColor:this.state.bgColor}}>Button</button>
        </div>
      )
    }


//    console.log(props.colors);
//    
//    console.log(randomIndexNumber);
  
//    return (
//     <button  style={{backgroundColor: `${props.colors[randomIndexNumber]}`}} 
//     onClick={e=> {this.style={backgrouncColor:"yellow"}}}>
    
//     </button>
//   //) const colors = this.state.colors.map((color, index) =>
    // key={index} index={index} colors={this.state.colors} />
    //);
// }

  }