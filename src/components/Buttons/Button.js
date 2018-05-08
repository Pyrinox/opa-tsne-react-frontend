import React from 'react';
import { Button } from 'reactstrap';

export default class Example extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			activeButtons: [],
		}
	}

	toggleButton = (activateButton) => {
		const index = this.state.activeButtons.indexOf(activateButton)
		if (index < 0) {
			this.state.activeButtons.push(activateButton);
		} else {
			this.state.activeButtons.splice(index, 1);
		}
		this.setState({
			activeButtons: this.state.activeButtons
		});
	}

  render() {
  	// console.log(this.activeButtons)
  	// if (this.activeButtons)
  	const isActive = false
    return (
        <Button color="info" onClick={() => this.toggleButton(this.props.id)} active={this.state.activeButtons.includes(this.props.id)}>{this.props.name}</Button>
    );
  }
}