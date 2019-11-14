import React from 'react';
import TodoItem from './TodoItem';

class TodoList extends React.Component {
	constructor(props) {
		super(props);
		this.keyCount = 0;
		this.getKey = this.getKey.bind(this);
	}

	getKey() {
		return this.keyCount ++;
	}

	render() {
		const items = this.props.items.map((item, index) => {
			const key = this.getKey();
			return (
				<TodoItem keyProp={key} key={key} item={item}
					deleteClicked={this.props.deleteClicked} index={index}/>
			);
		});
		return (<ul>{items}</ul>);
	}
}

export default TodoList;
