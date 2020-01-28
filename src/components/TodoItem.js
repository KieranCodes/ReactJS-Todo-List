import React from "react";

class TodoItem extends React.Component {
  state = {
    completed: this.props.item.completed
  };

  render() {
    const { item, keyProp, deleteClicked, toggleCompleted } = this.props;
    return (
      <li
        onClick={() => {
          this.setState(state => ({
            completed: !state.completed
          }));
          toggleCompleted(keyProp);
        }}
        style={{
          textDecoration: this.state.completed ? "line-through" : "none"
        }}
      >
        {item.title}
        <span
          onClick={e => {
            e.stopPropagation();
            deleteClicked(keyProp);
          }}
        >
          X
        </span>
      </li>
    );
  }
}

export default TodoItem;
