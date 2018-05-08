import React, { Component } from 'react';
import MenuBarSection from './MenuBarSection';
import PopoverButton from '../Buttons/PopoverButton';

const MENUBAR_SECTION_STRUCTURE = ['Dataset Selection', 'Clustering Options', 'Filtering Options', 'Color By'];
const SECTION_OPTIONS_STRUCTURE = {
  'Dataset Selection': ['Type of Student', 'Graduating Semester'], 
  'Clustering Options': ['Course Details', 'Semester Taken'],
  'Filtering Options': ['Filtering Logic', 'Major(s)', 'Minor(s)'],
  'Color By': ['Same Color', 'Academic Div', 'Ethnicity', 'Num of Majors', 'College', 'Time to Degree'],
};

class MenuBar extends Component {
  render() {
    return (
      <div className='menu-bar'>
        {MENUBAR_SECTION_STRUCTURE.map((sectionName, sectionIndex) => {
          const menuBarSectionId = (sectionName + sectionIndex).replace(/\s+/, '')
          return (
              <MenuBarSection key={sectionIndex} id={menuBarSectionId} options={SECTION_OPTIONS_STRUCTURE[sectionName]}>{sectionName}</MenuBarSection>
            )
          }
        )}
      </div>
    )
  }
}

export default MenuBar;