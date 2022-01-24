import './App.css';
import React from 'react';
import PrintTable from './PrintTable';
import NewTask from './NewTask';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // set: new Set(),
      // dummy data. should replace it into the above one!
      set: new Set(["a", "b", "c"]),
    }
    this.handleDeleteTask = this.handleDeleteTask.bind(this);
    this.handleNewTask = this.handleNewTask.bind(this);
  }

  handleDeleteTask(deleteTask) {
    var newset = new Set(this.state.set);
    newset.delete(deleteTask);
    this.setState({set: newset});
    // alert(Array.from(newset));
  }

  handleNewTask(newTask) {

    // TODO: should check newTask already exists in set.
    // I will implement it by using "has" attribute of Set structure.
    // Notice: preventDefault.... should be added.


    // TODO: also should check the vaildity of input data.
    // e.g. task_name should not to be empty.

    var newset = new Set(this.state.set);
    newset.add(newTask);
    this.setState({set: newset});
  }

  render() {
    return (
      <div>
        <div>
          <PrintTable
            list={Array.from(this.state.set)}
            handleDeleteTask={(deleteTask) => this.handleDeleteTask(deleteTask)}
          />
        </div>
        <div>
          <NewTask
            handleNewTask={(newTask) => this.handleNewTask(newTask)}
          />
        </div>
      </div>
    );
  }
}

function App() {
  return (
    <TodoList />
  );
}

export default App;
