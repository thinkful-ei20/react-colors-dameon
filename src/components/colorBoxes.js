import React from 'react';
import './colorBoxes.css';


export default function ColorBoxes(props){

     let boxes = props.colors.map((color, index) =>
    <button className="box"
      onClick={()=>props.onClick(index)} 
      style={{backgroundColor:color}}
      key={index} index={index} >
     </button>
    )
    return (
      <div>
        {boxes}
      </div>
    )
  }










// export default class ColorBoxes extends Component{
  
//   constructor(props){
//     super(props);
    
//       this.state = {
//         colors: ["blue","green","red","orange"],
//         bgColor:'purple'
//       }
//       this.handleClick = this.handleClick.bind(this);
//     }
    
//     handleClick() {
//       let randomIndexNumber = Math.floor(Math.random()*4);
//       this.setState({
//         bgColor: this.state.colors[randomIndexNumber]
//       })
//     }
    
//     render() {
//       let boxes = this.state.colors.map((color, index) =>
//       <button className="box"
//       onClick={this.handleClick} 
//       style={{backgroundColor:this.state.bgColor}}
//        key={index} index={index} >
//        </button>
//       )
//       return (
//         <div>
//           {boxes}
//         </div>
//       )
//     }


  
// //    return (
// //     <button  style={{backgroundColor: `${props.colors[randomIndexNumber]}`}} 
// //     onClick={e=> {this.style={backgrouncColor:"yellow"}}}>
    
// //     </button>
// //   //) const colors = this.state.colors.map((color, index) =>
//     // key={index} index={index} colors={this.state.colors} />
//     //);
// // }
// // <button className="box"
// // onClick={this.handleClick} 
// // style={{backgroundColor:this.state.bgColor}}>Button</button>
//   }