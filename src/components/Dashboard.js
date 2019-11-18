import React, { Component } from 'react'
import Buckets from './Buckets';
import Todos from './Todos';
import AddTodo from './AddTodo';
import {Redirect} from 'react-router-dom'

class Dashboard extends Component {

    state = {
        todos: [
          
        ],
        loginState: 'false'
      }

      deleteTodo = (id) => {
        const todos = this.state.todos.filter(todo =>{
          return todo.id !==id
        });
        this.setState({
          todos: todos
        });
      }

      addTodo = (todo) =>{
        todo.id = Math.random();
        let todos = [...this.state.todos, todo];
        this.setState({
          todos:todos
        })
      }
      componentDidMount = () =>{
        if(this.state.loginState === 'false'){
          return <Redirect to="/login"/>
        }
      }
    render() {
        return (
            <div>
                <div className="container-fluid wrapper">
                    <nav id="sidebar">
                      <Buckets/>
                    </nav>
                    <div id="content">
                    <div>
                        <h3>
                        <i class="fas fa-home"></i><span> Todo</span></h3>
                    </div>

                    <nav class="navbar navbar-expand-lg">
                        <div class="container-fluid">
                            <button type="button" id="sidebarCollapse" class="btn btn-info">
                                <i class="fas fa-align-left"></i>
                                <span> Buckets</span>
                            </button>
                        </div>
                    </nav>
                    <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
                    <AddTodo addTodo={this.addTodo}/>
                    </div>
                </div>
            </div>
        )
    }
}
export default Dashboard;