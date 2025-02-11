import React, { Component } from 'react';
import axios from 'axios';

class DataFetcher extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/todos?_limit=4')
    //         .then(response => response.json())
    //         .then(json => {
    //             console.log(json);
    //             this.setState({data: json})})
    //         .catch((error) => console.error("Error fetching data:", error));

    // }

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/todos?_limit=4")
            .then((response) => {
                console.log("Fetched Data:", response.data);
                this.setState({ data: response.data });
            })
            .catch((error) => console.error("Error fetching data:", error));
    }

    render() {
        return (
            <>
                <h1>DataFetcher</h1>
                <ul>
                    {this.state.data.map((todo) => (
                        <li key={todo.id} style={{ marginBottom: "10px" }}>
                            <b>ID:</b> {todo.id} <br /><b>Title:</b> {todo.title}<br />
                            <b> Completed:</b> {this.state.data.completed ? 'Completed' : 'Not Completed'}
                        </li>
                    ))}
                </ul>
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

// npm install axios