import React from 'react'
import PropTypes from 'prop-types'
import styles from "./Toolbar.module.css";

function Toolbar(props) {
  const {filters, selected, onSelectFilter} = props;
  const filterStyle = styles.filter;
  const activeFilterStyle = styles.active + ' ' + styles.filter;

  return (
  <section className = {styles.toolbar}>
    {filters.map(currentFilter =>
      <button 
        className = {currentFilter === selected ? activeFilterStyle : filterStyle}
        onClick = {evt => onSelectFilter(evt)}
        key = {Math.random(1000)}
      >
        {currentFilter}
      </button>
    )}
  </section>
  )

}

Toolbar.propTypes = {
  props: PropTypes.shape({
    filters: PropTypes.arrayOf(PropTypes.string).isRequired,
    selected: PropTypes.string.isRequired,
    onSelectFilter: PropTypes.func.isRequired,
  }
)};

export default Toolbar
