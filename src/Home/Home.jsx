import React from 'react'; 
import styles from "./Home.module.css";

const Home = () => {
    return (
        <article className = {styles.pageContent}>
            <header>
            <p className = {styles.pageTitle}>Welcome to the Delaware Humane Association!</p>
            <img className = {styles.pageImage} src="https://delawarehumane.org/wp-content/uploads/2016/06/Front-Bricks.png" alt="Delaware Humane Association Home"/>
            <p className = {styles.pageMission}>Founded in 1957, Delaware Humane Association (DHA) is Delaware’s premiere nonprofit no kill animal care and adoption center, serving a four state area. We are committed to providing for the needs of homeless and owned dogs and cats in our community.</p>
            </header>
            <div className = {styles.pageDetails}>
                <div>
                    <p><u>Hours of Operation:</u></p>
                    <ul>
                        <li>Sunday: 10am-5pm</li>
                        <br></br>
                        <li>Monday: 9am-5pm</li>
                        <br></br>
                        <li>Tuesday: 9am-5pm</li>
                        <br></br>
                        <li>Wednesday: 9am-5pm</li>
                        <br></br>
                        <li>Thursday: 9am-5pm</li>
                        <br></br>
                        <li>Friday: 10am-5pm</li>
                        <br></br>
                        <li>Saturday: 10am-5pm</li>
                        <br></br>
                    </ul>
                </div>
                <div>
                <p><u>Contact Information:</u></p>
                    <ul>
                        <li>Email: info@delawarehumane.org </li>
                        <br></br>
                        <li>Phone Number: (302)562-7011 </li>
                        <br></br>
                        <li>Wilmington Address: 701 A St Wilmington DE 19801</li>
                        <br></br>
                        <li>Newark Address: 123 S Main St Newark DE 19711
                            <br></br>
                        </li>
                    </ul>
                </div>
            </div>
        </article>
    )
}

export default Home
