import React from "react";
import HTMLText from "../HTMLText/HTMLText.jsx";
import styles from "./PetDetails.module.css";
import { Link } from "react-router-dom";
import PetImage from "../PetImage/PetImage";
import PetTable from "../PetTable/PetTable";
import Form from "../Form/Form";

const PetDetails = (props) => {
  return (
    <div>
      <Link to="/petlist" className={styles.back}>
        Return to view all pets
      </Link>
      <article className={styles.article}>
        <div className = {styles.detailsGreeting}>
          Hi, my name is <u>{props.article.name}</u>!
        </div>
        <div className = {styles.detailsImage}>
          <PetImage
            url={props.article.image.url}
            name={props.article.name}
          />
        </div>
        <div className = {styles.detailsTable}>
          <PetTable
                slug = {props.article.slug}
                species = {props.article.species}
                breed = {props.article.breed}
                gender = {props.article.gender}
                age = {props.article.age}
                size = {props.article.size}
                color = {props.article.color}
                location = {props.article.location}
              />
        </div>
        <div className = {styles.detailsBio}>
          <HTMLText text={props.article.bio} /> 
        </div>
        <div className = {styles.detailsForm}>
        <Form/>
        </div>
      </article>
    </div>
  );
};

export default PetDetails;