import React from 'react'
import { menuOptions } from '../../_data'
import SimpleSelect from '../SimpleSelect'
import MenuTabsContainer from './MenuTabsContainer'
import SortableNestedMenu from './SortableNestedMenu'

function MenuOverview() {
  return (
    <MenuTabsContainer
      title={'Overview'}
      description={
        'Selectionner le menu active et organiser les differents elements a votre gise.'
      }
    >
      <div className="">
        <div className="w-1/3">
          <SimpleSelect
            options={menuOptions}
            placeholder="Selectionner un menu"
          />
        </div>
        <div className="w-full">
          <SortableNestedMenu />
        </div>
      </div>
    </MenuTabsContainer>
  )
}

export default MenuOverview
