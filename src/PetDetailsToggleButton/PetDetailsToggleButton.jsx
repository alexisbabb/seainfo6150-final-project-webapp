import React from "react";
import PropTypes from "prop-types";
import styles from "./PetDetailsToggleButton.module.css";

const PetDetailsToggleButton = (props) => {
  return (
    <button className={styles.detailsButton} onClick={props.onClick}>
      {props.buttonText}
    </button>
  );
};

PetDetailsToggleButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default PetDetailsToggleButton; 