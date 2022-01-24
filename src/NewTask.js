import { sankeyAlignmentPropKeys } from 'nivo/lib/props/sankey';
import React from 'react';

class NewTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Please write a new task!', 
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleNewTask(this.state.value);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Task: 
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default NewTask;