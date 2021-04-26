import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
    return(
        <nav className = {styles.nav}>
          <Link to="/">
            <img
              className={styles.companyLogo} src="https://delawarehumane.org/wp-content/uploads/2016/07/DHA-Web-Logo-For-Footer.png" alt="Delaware Humane Association Logo"/>
          </Link>
          <Link className={styles.navigation} to="/adoptionprocess">Adoption Process Overview</Link>
          <Link className={styles.navigation} to="/petlist">Adoptable Pets</Link>
          <Link className={styles.navigation} to="/foodpantry">Food Pantry</Link>
          <Link className={styles.navigation} to="/clinicservices">Clinic Services</Link>
        </nav>
    )
};

export default Header;