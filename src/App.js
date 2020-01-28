import React from "react";
import { Helmet } from "react-helmet";
import TodoItem from "./components/TodoItem";
import AddItem from "./components/AddItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";

class App extends React.Component {
  state = {
    items: {}
  };

  addItem = newItem => {
    this.setState({
      items: {
        ...this.state.items,
        [+new Date()]: {
          title: newItem,
          completed: false
        }
      }
    });
  };

  deleteClicked = key => {
    let tempItems = { ...this.state.items };
    delete tempItems[key];
    this.setState({
      items: {
        ...tempItems
      }
    });
  };

  toggleCompleted = key => {
    let tempItems = { ...this.state.items };
    tempItems[key].completed = !tempItems[key].completed;
    this.setState({
      items: {
        ...tempItems
      }
    });
  };

  render() {
    const items = Object.keys(this.state.items).map(key => {
      return (
        <CSSTransition key={key} timeout={250} classNames="animation">
          <TodoItem
            item={this.state.items[key]}
            keyProp={key}
            deleteClicked={this.deleteClicked.bind(this)}
            toggleCompleted={this.toggleCompleted.bind(this)}
          />
        </CSSTransition>
      );
    });
    return (
      <div id="container">
        <Helmet>
          <title>Todo List App</title>
          <link
            href="https://fonts.googleapis.com/css?family=Muli&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <AddItem addItem={this.addItem.bind(this)} />
        <TransitionGroup>{items}</TransitionGroup>
      </div>
    );
  }
}

export default App;
