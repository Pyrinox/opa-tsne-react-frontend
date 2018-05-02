import React, { Component } from 'react';
import NavBarSection from './NavBarSection';

const NAVBAR_SECTION_STRUCTURE = ['Dataset Selection', 'Clustering Options', 'Filtering Options', 'Color By'];
const SECTION_OPTIONS_STRUCTURE = {
  'Dataset Selection': ['Type of Student', 'Graduating Semester'], 
  'Clustering Options': ['Course Details', 'Semester Taken'],
  'Filtering Options': ['Filtering Logic', 'Major(s)', 'Minor(s)'],
  'Color By': ['Same Color', 'Academic Div', 'Ethnicity', 'Num of Majors', 'College', 'Time to Degree'],
};

class NavBar extends Component {
  render() {
    return (
      <div className='navbar'>
        {NAVBAR_SECTION_STRUCTURE.map((sectionName, sectionIndex) => {
          return <NavBarSection key={sectionIndex} options={SECTION_OPTIONS_STRUCTURE[sectionName]}>{sectionName}</NavBarSection>
          }
        )}
      </div>
    )
  }
}

export default NavBar;