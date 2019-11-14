import React from 'react';

class TodoItem extends React.Component {
	render() {
		const index = this.props.index;
		return (
			<li>
				{this.props.item}
				<span onClick={() => this.props.deleteClicked(index)}>X</span>
			</li>
		);
	}
}

export default TodoItem;
