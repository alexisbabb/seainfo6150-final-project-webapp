import React from 'react'; 
import styles from "./FoodPantry.module.css";

const FoodPantry = (props) => {
    return (
        <div>
            <article className = {styles.pageContent}>
            <header className = {styles.pageTitle} >
            Food for all!
        
            </header>
            <div className = {styles.pageDetails}>
            <img className = {styles.pageImage} src="https://charlottenc.gov/AnimalsCMPD/Donate/PublishingImages/pet%20food.jpg" alt="Food Pantry"/>
                    <ul>
                    <u>Pick-Up:</u> DHA’s Pet Food Pantry was created to help members of our community who are having trouble taking care of their pets. The pantry is operated on the honor system; recipients are not required to show proof of income to determine eligibility. 
                    <br></br>
                    <br></br>
                    <u>Donations:</u> The primary focus of the pantry is collecting food and supplies (e.g. canned and dry food, cat litter) for cats and dogs and distributing them to those in need. We ask that items donated specifically for the pantry be new and unused, and that food containers be unopened. We thank you for your generosity!
                    <br></br>
                    <br></br>
                    <u>Hours:</u> The food pantry is open 9am-5pm on Monday through Thursday or 10am-5pm on Friday through Sunday for both donations and pick-up. 
                    <br></br>
                    </ul>  
            </div>
        </article>

        </div>
    )
}



export default FoodPantry