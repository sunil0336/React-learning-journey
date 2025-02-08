import React, { Component } from 'react'
 

class Counter extends Component{
  constructor(props){
    super(props);
    this.state = {
      count: this.props.counttt || 0
    }
    // this.countHandler = this.countHandler.bind(this) if u r using normal function
  }

    // countHandler (){
    //     this.setState((prevState) => ({
    //         count: prevState.count + 1,
    //       }));
    //     // alert("hii");
    // }

    // if u r using arrow fun.. then no need to use bind , it automatically bind this
    dicrement =()=> {
        this.setState((prevState) => ({
            count: prevState.count - 1,
          }));
        // alert("hii");
    }
    increment =()=> {
        this.setState((prevState) => ({
            count: prevState.count + 1,
          }));
        // alert("hii");
    }
  
  render() {
    return(
      <>
        {this.state.count}
        
        <button onClick={this.dicrement}>Dicrement counter</button>
        <button onClick={this.increment}>Increase counter</button>
        {/* <button onClick={() => {this.setState((prevState) => ({
            count: prevState.count + 1,
          }))}}>Increase counter</button>
        <button onClick={() => {this.setState((prevState) => ({
            count: prevState.count - 1,
          }))}}>Decrease counter</button> */}
      </>
    )
  }
}


export default Counter