import React from 'react'; 
import styles from "./Error.module.css";

const Error = () => {
    return (
        <article className = {styles.pageContent}>
            <header className = {styles.pageTitle} >
            <p>Oh No! It looks like this page isn't valid. Sorry about that!</p>
            <img className = {styles.pageImage} src="https://cdn3.volusion.com/euhfr.xvuyx/v/vspfiles/photos/EG1155-1374-2.jpg?v-cache=1325487014" alt="Error"/>
            </header>
        </article>
    )
}

export default Error
