import React, { Component } from 'react';
import AnimatedMulti from '../DropDowns/AnimatedMulti';
import Button from '../Buttons/Button';


class SectionOption extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     activeButtons: [],
  //   }
  // }

  // toggleButton = (activateButton) => {
  //   console.log(this.state.activeButtons)
  //   const index = this.state.activeButtons.indexOf(activateButton)
  //   if (index < 0) {
  //     this.state.activeButtons.push(activateButton);
  //   } else {
  //     this.state.activeButtons.splice(index, 1);
  //   }
  //   this.setState({
  //     activeButtons: this.state.activeButtons
  //   });
  // }


  // handleChange = (selectedOptions) => {
  //   this.setState({ selectedOptions });
  //   console.log(`Selected: ${selectedOptions.label}`);
  // }

  render() {
    const activeButtons = this.state;
    const option = (type) => {
      if (type==='drop-down') {
        // console.log('wot')
        return(
          <AnimatedMulti 
          // onChange={this.handleChange}
          // value ={selectedOptions}
          />
          
        )
      } else {
        // console.log('figure this out')
        return(
          <Button 
          id={this.props.id} 
          active={this.activeButtons} 
          onClick={this.toggleButton}
          name={this.props.name}
          />
        )
      }
    }

    return (
      <div className="section-option">
        <div className='option-name'>
          {this.props.type==='drop-down' ? this.props.children : null}
        </div>
        {option(this.props.type)}
      </div>
    )
  }
}

export default SectionOption;