import React, { Component } from 'react'

export default class FormDemo


extends Component {
    state={
        userName:"",
        city:""
    }

    onChangeHandler=(e)=>{
        // this.setState({userName:e.target.value})
        let name=e.target.name;
        let value=e.target.value;
        this.setState({[name]:value})
    }
    onSubmitHandler=(e)=>{
        e.preventDefault();
        alert(this.state.userName );
    }
    render() { 
        return (
            <form>
                <h3>Username</h3>
                <input type="text" onChange={this.onChangeHandler} name="userName" ></input>
                <h3>Username is {this.state.userName}</h3>
                <h3>City</h3>
                <input type="text" onChange={this.onChangeHandler} name="city" ></input>
                <h3>City is {this.state.city}</h3>
                <input type="submit" value="Save" onClick={this.onSubmitHandler} />
            </form>
        )
    }
}
