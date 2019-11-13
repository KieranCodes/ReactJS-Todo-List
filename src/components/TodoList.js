import React from 'react';

class TodoList extends React.Component {
  render() {
    const items = this.props.items.map(item => { return (<li key={item}>{item}</li>); });
    return (<ul>{items}</ul>);
  }
}

export default TodoList;

