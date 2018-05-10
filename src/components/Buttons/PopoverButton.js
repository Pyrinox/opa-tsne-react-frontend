import React, {Component} from 'react';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import IconButton from './IconButton';
import { SECTION_OPTIONS_STRUCTURE, OPTIONS, ABOUT_OPTIONS } from '../MenuBar/constants/constants';


class PopoverButton extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false
    };
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  render() {
    const details = (sectionName) => {
      if (sectionName==='Color By') {
        return(
          <div>
            {SECTION_OPTIONS_STRUCTURE['Color By'].map((optionName, optionIndex)=> {
              return(
                <div key={optionIndex}>
                  <div>{optionName}</div>
                  <div>{ABOUT_OPTIONS[optionName]}</div>
                </div>
              )
            })}
          </div>
        )
      } else {
        return (
          SECTION_OPTIONS_STRUCTURE[sectionName].map((optionName, optionIndex) => {
            if (optionName==='Graduating Semester' || optionName==='Major(s)'|| optionName==='Minor(s)') {
              console.log(ABOUT_OPTIONS[optionName])
              return (
                <div key={(optionName + optionIndex).replace(/\s+/, '')}>
                  <div>{optionName}</div>
                  <div>{ABOUT_OPTIONS[optionName]}</div>
                </div>
              )
            } else {
              return (
                <div key={(optionName + optionIndex).replace(/\s+/, '')}>
                  <div>{optionName}</div>
                  {OPTIONS[optionName].map((specificOption, specificOptionIndex) => {
                  console.log(ABOUT_OPTIONS[specificOption])
                    return(
                      <div key={(specificOption+specificOptionIndex).replace(/\s+/, '')}>
                        <div>{specificOption}</div>
                        <div>{ABOUT_OPTIONS[specificOption]}</div>
                      </div>
                    )
                  })}
                </div>
              )
            }
          })
        )
      }
    }
     


    return (
      <div>

        <Button id={this.props.id} className="about-button" onClick={this.toggle}>
          ?
        </Button>
        <Popover placement="bottom" isOpen={this.state.popoverOpen} target={this.props.id} toggle={this.toggle}>
          <PopoverHeader>More Info About <b>{this.props.sectionName}</b></PopoverHeader>
          <PopoverBody>{details(this.props.sectionName)}</PopoverBody>
        </Popover>
      </div>
    );
  }
}

export default PopoverButton;