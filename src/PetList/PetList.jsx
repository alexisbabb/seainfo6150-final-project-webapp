import React from "react";
import PropTypes from "prop-types";
import styles from "./PetList.module.css";
import PetListItem from "../PetListItem/PetListItem.jsx";

const PetList = (props) => {
  let displayContent;

  if (props.articles.length) {
    displayContent = (
      <ul className={styles.container}>
        {props.articles.map((article) => (
          <PetListItem article={article} key={article.slug} />
        ))}
      </ul>
    );
  } else {
    displayContent = <div>You have no data!</div>;
  }

  return (
    <div>
      {displayContent}
    </div>
  );
};

PetList.propTypes = {
    articles: PropTypes.array.isRequired
}
export default PetList;