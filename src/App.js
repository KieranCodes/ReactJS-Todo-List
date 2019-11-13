import React from 'react';
import TodoList from './components/TodoList';
import AddItem from './components/AddItem';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: "",
      items: []
    }
  }

  handleChange(e) {
    this.setState({ inputText: e.target.value });
  }

  keyDown(e) {
    if(e.which === 13 || e.keyCode === 13)
      this.setState(state => ({
	items: state.items.concat(state.inputText),
	inputText: ""
      }));
  }

  render() {
    return (
      <div>
        <AddItem
	  inputText={this.state.inputText}
	  handleChange={this.handleChange.bind(this)}
	  keyDown={this.keyDown.bind(this)}/>
        <TodoList items={this.state.items}/>
      </div>
    );
  }
}

export default App;
