import React from 'react'; 
import styles from "./AdoptionProcess.module.css";

const AdoptionProcess = (props) => {
    return (
        <article className = {styles.pageContent}>
            <header className = {styles.pageTitle} >
            Thank you for choosing adoption!
        
            </header>
            <div className = {styles.pageDetails}>
            <img className = {styles.pageImage} src="https://delawarehumane.org/wp-content/uploads/2019/03/34033908_10156259256476153_766746855991148544_o.jpg" alt="Adoption Process"/>
                <ol>
                    <li><u>Find your friend for life</u><br></br>
                    Our animals listings are updated in real time on our Adoptable Pets page. Animals have photos, pet profiles, current location and statuses updated regularly.</li>
                    <br></br>
                    <li><u>Submit your questionnaire online</u><br></br> 
                    Adoption Questionnaires submitted online are reviewed within 48hrs or immediately upon submission in-person. You can access the questionannaire from the individual pet pages.</li>
                    <br></br>
                    <li><u>Make an appointment or come in for a visit</u><br></br> 
                    Adoptions by appointment are from 9am-5pm on Monday through Thursday. No appointment needed adoptions can occur on open visitation days from 10am-5pm on Friday through Sunday. While we recommend submitting your questionnaire online before visiting on these designated days, we will have questionnaires available to submit in-person.</li>
                    <br></br>
                    <li><u>Meet your match</u><br></br>
                    Our Friend Makers will then introduce you to possible matches where you can spend time with them and ask any questions you have.</li>
                    <br></br>
                    <li><u>Take your new pet home</u><br></br>
                    Our Client Services staff will then go over necessary information and paperwork to complete your adoption! </li>
                </ol>
            </div>
        </article>
    )
}



export default AdoptionProcess