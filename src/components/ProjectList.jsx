import React from 'react'
import PropTypes from 'prop-types'
import styles from "./ProjectList.module.css";

function ProjectList(props) {
  const {images, selected} = props;

  const defineSetOfImages = () => {
    if (selected === "All") {
      return images;
    }
    return images.filter(currentImage => currentImage.category === selected);
    }
    
    return (
      <>
        <section className = {styles.gallery}>
          {defineSetOfImages().map(currentImage => 
            <img
              className = {styles.project}
              src = {currentImage.img}
              alt = {`${currentImage.category} no rendered`}
              key = {Math.random(1000)} 
            />
          )}
        </section>
      </>
  );
}

ProjectList.propTypes = {
  props: PropTypes.shape({
    images: PropTypes.array.isRequired,
    selected: PropTypes.string.isRequired,
  }
)}

export default ProjectList
