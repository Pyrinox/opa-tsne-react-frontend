import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Select from 'react-select';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';



// class NavBar extends Component {
//   render() {

//   }
// }



class SectionOption extends Component{
  render() {
    return (
      <div id="section-option">content</div>
    )
  }
}

class NavBarSection extends Component {
  constructor(props) {
    console.log("SKDJFLDJFKD")
    super(props);
    // this.state = {
    //   sectionOptionStructure: sectionOptionStructure,
    // }
  }
  // renderSectionOption(sectionOptionName) {
  //   return (
  //     <SectionOption/>
  //   );
  // }

  render() {
    console.log("hasdflk")
    const options = this.props.options.map((optionName, optionIndex) => {
      return (
        <SectionOption key={optionIndex}>{optionName}</SectionOption>
      );
    })

    return(
      <div id="navbar-section">
        {options.map((optionComponent, optionIndex) => {
          {console.log(optionComponent)}
          return(
            <div id="navbar-section">
              {optionComponent.props.children}
            </div>
          )
        })

        }
      </div>
    );
  }
}

const NAVBAR_SECTION_STRUCTURE = ['Dataset Selection', 'Clustering Options', 'Filtering Options', 'Color By'];
const SECTION_OPTIONS_STRUCTURE = {
  'Dataset Selection': ['Type of Student', 'Graduating Semester'], 
  'Clustering Options': ['Course Details', 'Semester Taken'],
  'Filtering Options': ['Filtering Logic', 'Major(s)', 'Minor(s)'],
  'Color By': ['Same Color', 'Academic Div', 'Ethnicity', 'Num of Majors', 'College', 'Time to Degree'],
};

class NavBar extends Component {

  render() {
    const sections = NAVBAR_SECTION_STRUCTURE.map((sectionName, sectionIndex) => {
      let sectionOptions = SECTION_OPTIONS_STRUCTURE[sectionName]
      // console.log(sectionOptions);
      return (
        <NavBarSection key={sectionIndex} options={sectionOptions}>{sectionName}</NavBarSection>
      );
    })

    return (
      <div id='navbar'>
        {sections.map((sectionComponent, sectionIndex) => {
          // {console.log(sectionComponent.props.children)}
          return <div key={sectionIndex}>{sectionComponent.props.children}</div>
          }
        )}
      </div>
    )
  }
}

class App extends Component {

  render() {
    return (

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <NavBar/>

      </div>
    );
  }
}




const options = [
  { value: 'Major1', label: 'Major1'},
  { value: 'Major2', label: 'Major2'},
  { value: 'Major3', label: 'Major3'}
]


const DropDown = () => (
  <Select options={options} />
)

// class NavBar extends React.Component {
//   constructor(props) {
//     super(props);

//     this.toggle = this.toggle.bind(this);
//     this.state = {
//       isOpen: false
//     };
//   }
//   toggle() {
//     this.setState({
//       isOpen: !this.state.isOpen
//     });
//   }
//   render() {
//     return (
//       <div>
//         <Navbar color="light" light expand="md">
//           <NavbarBrand href="/">reactstrap</NavbarBrand>
//           <NavbarToggler onClick={this.toggle} />
//           <Collapse isOpen={this.state.isOpen} navbar>
//             <Nav className="ml-auto" navbar>
//               <NavItem>
//                 <NavLink href="/components/">Components</NavLink>
//               </NavItem>
//               <NavItem>
//                 <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
//               </NavItem>
//               <UncontrolledDropdown nav inNavbar>
//                 <DropdownToggle nav caret>
//                   Options
//                 </DropdownToggle>
//                 <DropdownMenu right>
//                   <DropdownItem>
//                     Option 1
//                   </DropdownItem>
//                   <DropdownItem>
//                     Option 2
//                   </DropdownItem>
//                   <DropdownItem divider />
//                   <DropdownItem>
//                     Reset
//                   </DropdownItem>
//                 </DropdownMenu>
//               </UncontrolledDropdown>
//             </Nav>
//           </Collapse>
//         </Navbar>
//       </div>
//     );
//   }
// }


// function getListOfMajors()

// function getListOfMinors()


export default App;
