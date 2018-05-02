import React, { Component } from 'react';
import SectionOption from './SectionOption';

class NavBarSection extends Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		selectedOption: '',
	// 	}
	// }

	// handleChange = (selectedOption) => {
	//     this.setState({ selectedOption }); 
	//     console.log(`Selected: ${selectedOption.label}`);
	//     console.log("sldkfjdsklfjsd");
	// }


  	render() {
	  	// const selectedOption = this.state;

	    return(
	      	<div className="navbar-section">
		        <div className='section-name'>
		        	{this.props.children}
		        </div>
		        {this.props.options.map((optionName, optionIndex) => {
			        return(
		        		<SectionOption 
	        			key={optionIndex} 
	        			id={optionIndex}
	        			name={optionName}
	        			// value={selectedOption} 
	        			// onChange={this.handleChange} 
	        			type={this.props.children==='Color By' ? 'button' : 'drop-down'}>
							{optionName}
			        	</SectionOption>
			        )
		        })

	        	}
	    	</div>
	    );
	}
}

export default NavBarSection;