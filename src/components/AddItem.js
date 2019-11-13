import React from 'react';

class AddItem extends React.Component {
  render() {
    return (
      <input
        type="text"
	onChange={this.props.handleChange}
	onKeyPress={this.props.keyDown}
	value={this.props.inputText} />
    );
  }
}

export default AddItem;
