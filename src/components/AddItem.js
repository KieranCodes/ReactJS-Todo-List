import React from 'react';

class AddItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			inputText: ""
		}
	}

	handleChange(e) {
		this.setState({
			inputText: e.target.value
		});
	}

	keyDown(e) {
		if(e.which === 13 || e.keyCode === 13) {
			this.props.addItem(this.state.inputText);
			this.setState({
				inputText: ""
			});
		}
	}

  render() {
    return (
      <input
        type="text"
				placeholder="Type something..."
				onChange={this.handleChange.bind(this)}
				onKeyPress={this.keyDown.bind(this)}
				value={this.state.inputText} />
    );
  }
}

export default AddItem;
