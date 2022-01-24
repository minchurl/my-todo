import React from 'react';

class NewTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Please write a new task!'
    };
  }

  render() {
    return (
        "Hello World!"
    );
  }
}

export default NewTask;