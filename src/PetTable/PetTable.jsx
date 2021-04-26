import React from 'react'; 
import PropTypes from "prop-types";
import styles from "./PetTable.module.css";


const PetDetailsTable = (props) => {
    return (
        <div>
            <table className= {styles.table}>
                <tr>
                    <th>Animal ID</th>
                    <td>{props.slug}</td>
                </tr>
                <tr>
                    <th>Species</th>
                    <td>{props.species}</td>
                </tr>
                <tr>
                    <th>Breed</th>
                    <td>{props.breed}</td>
                </tr>
                <tr>
                    <th>Gender</th>
                    <td>{props.gender}</td>
                </tr>
                <tr>
                    <th>Age</th>
                    <td>{props.age}</td>
                </tr>
                <tr>
                    <th>Size</th>
                    <td>{props.size}</td>
                </tr>
                <tr>
                    <th>Color</th>
                    <td>{props.color}</td>
                </tr>
                <tr>
                    <th>Location</th>
                    <td>{props.location}</td>
                </tr>
            </table>
        </div>
    )
}

PetDetailsTable.propTypes = {
    slug: PropTypes.number.isRequired,
    species: PropTypes.string.isRequired, 
    breed: PropTypes.string.isRequired, 
    gender: PropTypes.string.isRequired, 
    age: PropTypes.string.isRequired, 
    size: PropTypes.string.isRequired, 
    color: PropTypes.string.isRequired, 
    location: PropTypes.string.isRequired, 
  };

export default PetDetailsTable
