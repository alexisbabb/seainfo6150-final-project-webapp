import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./PetListItem.module.css";
import PetImage from "../PetImage/PetImage.jsx";
import PetDetailsToggleButton from "../PetDetailsToggleButton/PetDetailsToggleButton.jsx";

const PetListItem = (props) => {
  const [isTextShowing, setIsTextShowing] = useState(false);

  function onClick() {
    setIsTextShowing(!isTextShowing);
  }

  return (
    <li className={styles.container}>
      <article className={styles.article}>
        <header className={styles.header}>
          <PetImage
            url={props.article.image.url}
            name={props.article.name}
          />
          <h2>
            <Link
              className={styles.link}
              to={`/petlist/${props.article.slug}`}
            >
              {props.article.name}
            </Link>
          </h2>
        </header>
        <div className={styles.wrapper}>
          {isTextShowing && (
            <div>
              <p>Breed: {props.article.breed}</p>
              <p>Age: {props.article.age}</p>
            </div>
          )}
        </div>
        <PetDetailsToggleButton
          buttonText={isTextShowing ? "Show less" : "Show more"}
          onClick={onClick}
        />
      </article>
    </li>
  );
};

PetListItem.propTypes = {
  article: PropTypes.object.isRequired,
};
export default PetListItem;