import React from 'react'
import Toolbar from './Toolbar';
import ProjectList from './ProjectList';
import mock from './mock';

function Portfolio() {
  const images = mock;
  const filters = ["All", "Websites", "Flayers", "Business Cards"];
  
  const [filterState, setFilterState] = React.useState({selected: "All"});

  const onSelectFilter = (selectedFilter) => {
    setFilterState({selected: selectedFilter});
  }

  return (
    <>
      <Toolbar 
        filters = {filters}
        selected = {filterState.selected}
        onSelectFilter = {onSelectFilter}
      />

      <ProjectList
        images = {images}
        selected = {filterState.selected}
      />
    </>
  )
}

Portfolio.propTypes = {}

export default Portfolio
