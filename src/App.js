import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation'
import TaskForm from './components/TaskForm'
import { tasks } from './tasks.json'

class App extends Component {
  constructor () {
    super();

    this.state = {
      title: 'Task Application',
      tasks
    }
    this.handleAddTask = this.handleAddTask.bind(this);
  }

  handleAddTask (task) {
    this.setState({
      tasks: [...this.state.tasks, task]
    });
  }

  onRemoveTask (index) {
    this.setState({
      tasks: this.state.tasks.filter((element, i) => {
        return i !== index;
      })
    });
  }

  render() {
    const task = this.state.tasks.map((task, index) => {
      return (
        <div className="col-md-4" key={index}>
          <div className="card mt-4">
            <div className="card-header">
              <h3>{task.title}</h3>
              <span className="badge badge-pill badge-danger ml-2">
                {task.priority}
              </span>
            </div>
            <div className="card-body">
              <p>{task.description}</p>
              <p>{task.responsable}</p>
            </div>
            <div className="card-footer">
              <button
                className="btn btn-danger"
                onClick={this.onRemoveTask.bind(this, index)}>
                Delete
              </button>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div className="App">
        <header className="App-header">
          <Navigation title={this.state.title} ntask={this.state.tasks.length} />
        </header>
        <div className="container">
          <div className="row mt-4">
            <div className="col-md-3">
              <img src={logo} className="App-logo" alt="logo" />
              <TaskForm onAddTask={this.handleAddTask}/>
            </div>
            <div className="col-md-9">
              <div className="row">
                { task }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
