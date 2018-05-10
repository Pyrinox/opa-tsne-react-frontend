import React, { Component } from 'react';
import MenuBarSection from './MenuBarSection';
import PopoverButton from '../Buttons/PopoverButton';
import { MENUBAR_SECTION_STRUCTURE, SECTION_OPTIONS_STRUCTURE } from './constants/constants'

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