import React from 'react';
import { Helmet } from 'react-helmet';
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

	deleteClicked(index) {
		let items = this.state.items;
		items.splice(index, 1);
		this.setState(state => ({
			items: items
		}));
	}

  render() {
    return (
      <div id="container">
				<Helmet>
					<title>Todo List App</title>
					<link href="https://fonts.googleapis.com/css?family=Muli&display=swap" rel="stylesheet"/>
				</Helmet>
        <AddItem
				  inputText={this.state.inputText}
				  handleChange={this.handleChange.bind(this)}
				  keyDown={this.keyDown.bind(this)}/>
        <div>
					<TodoList
						items={this.state.items}
						deleteClicked={this.deleteClicked.bind(this)}/>
				</div>
      </div>
    );
  }
}

export default App;
