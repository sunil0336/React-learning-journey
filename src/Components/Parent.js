import React, { Component } from 'react'
import './style.css'
import Child from './Child';
 

class Parent extends Component{
  constructor(props){
    super(props);
    this.state = {
      parentName: 'Sunil'
    }
    this.greet = this.greet.bind(this)
  }
  
  greet(){
    alert(`HEllO ${this.state.parentName}`)
  }
  render() {
    return(
      <div>
        <Child greetHandler={this.greet}/>

      </div>
    )
  }
}




// function Parent() {
//   return (
//     <div className='s'>This is the Parent</div>
//   )
// }

export default Parent