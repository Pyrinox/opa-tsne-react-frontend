import React, { Component } from 'react';

import Select from 'react-select';
// import * as Animated from 'react-select/lib/animated';
// import { colourOptions } from './docs/data';

const DS_TYPE_OF_STUDENT = [
  { value: 'transfer-student', label: 'Transfer Student'},
  { value: 'freshman-entrant', label: 'Freshman Entrant'},
  { value: '1-entrant', label: '1 Entrant'},
  { value: '2-entrant', label: '2 Entrant'},
  { value: '3-entrant', label: '3 Entrant'},
]

class AnimatedMulti extends Component {
	constructor(props) {
	    super(props)
	    this.state = {
	      selectedOptions: '',
	    }
	}

	handleChange = (selectedOptions) => {
	    this.setState({ selectedOptions });
	    // console.log(`Selected: ${selectedOptions.label}`);
	    // if (selectedOptions!=null) {
	    // 	console.log("SELECTED: " + selectedOptions[0].label);
	    // } else {
	    // 	return null
	    // }
	}



	render() {
		// console.log("HENLO");
		const { selectedOptions } = this.state;
		return (
			<Select
				value={selectedOptions}
				isMulti
				onChange={this.handleChange}
				options={DS_TYPE_OF_STUDENT}
	    	/>
		)
	}
}


// const AnimatedMulti = ({onChange}) => (
// 	<Select
//       value={[DS_TYPE_OF_STUDENT[0], DS_TYPE_OF_STUDENT[1]]}
//       isMulti
//       onChange={onChange}
//       options={DS_TYPE_OF_STUDENT}
//     />
// );
export default AnimatedMulti;