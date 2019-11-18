import React, { Component } from 'react';

class AddTodo extends Component{
    state ={
        content:''
    }
    handleChange = (e) =>{
        this.setState({
            content: e.target.value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            content:''
        })
    }
    render()
    {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="container-fluid addTodoDiv">
                        <input type="text" className="addTodo" id="formGroupExampleInput" placeholder="Add a Todo" onChange={this.handleChange} value={this.state.content}></input>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddTodo;


