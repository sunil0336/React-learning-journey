import React, { Component } from "react";

class Form extends Component {
    constructor(porps) {
        super(porps);
        this.state = {
            name: "",
            email: ""
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        // console.log("Form Data:", this.state);
        alert(`Name: ${this.state.name}\nEmail: ${this.state.email}`);
        this.setState({ name: "", email: "" });
    };


    render() {
        return (
            <>
                <h1>Simple User Form</h1>
                <h2>Name is : {this.state.name}</h2>
                <h2>Email is : {this.state.email}</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Name: </label>
                        <input
                            type="text"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                    </div>
                    <br />
                    <div>
                        <label>Email: </label>
                        <input
                            type="email"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </>
        );
    }
}

export default Form