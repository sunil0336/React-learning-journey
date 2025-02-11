import React, { Component } from 'react';

class DataFetcher extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => this.setState({data: json}))
            .catch((error) => console.error("Error fetching data:", error));

    }
    
    render() {
        return (
            <>
            <h1>DataFetcher</h1>
            <p>Id: {this.state.data.id}</p>
            <p>Title: {this.state.data.title}</p>
            <p>completed: {this.state.data.completed ? 'Completed' : 'Not Completed'}</p>
            </>
        );
    }
}

export default DataFetcher


// {
//     "userId": 1,
//     "id": 1,
//     "title": "delectus aut autem",
//     "completed": false
//   }