import React from "react";
import PropTypes from "prop-types";
import styles from "./PetImage.module.css";

const PetImage = (props) => {
  return <img className={styles.image} alt={props.name} src={props.url} />;
};

PetImage.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
export default PetImage;