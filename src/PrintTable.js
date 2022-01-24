import React from 'react';

class PrintTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const printList = this.props.list.map((task, id) => {
      return (
        <tr key={task}>
          <td>
            {id}
          </td>
          <td>
            {task}
          </td>
          <td>
            <button onClick={() => this.props.handleDeleteTask(task)}> delete </button>
          </td>
        </tr>
      );
    });
    return (
      <div>
        "Hello World" <br></br>
        <table border="3">
          <thead>
            <tr>
              <th>id</th>
              <th>task</th>
              <th>delete button</th>
            </tr>
          </thead>
          <tbody>
            {printList}
          </tbody>
        </table>
      </div>
    );
  }
}

export default PrintTable;