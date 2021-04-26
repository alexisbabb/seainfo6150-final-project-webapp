import React from 'react'; 
import styles from "./ClinicServices.module.css";

const ClinicServices = (props) => {
    return (
        <article className = {styles.pageContent}>
            <header className = {styles.pageTitle} >
            Get vaccinations, microchipping, and dog licenses!

            </header>
            <div className = {styles.pageDetails}>
                <img className = {styles.pageImage} src="https://www.mercypetclinic.org/wp-content/uploads/2017/12/MPC_Dog_Vaccine_Main.jpg" alt="Clinic Services"/>
                <div>
                    <p><u>Location:</u> DHA Wilmington (701 A St Wilmington DE 19801)</p>
                    <br></br>
                    <br></br>
                    <u>Time:</u> Clinic events are held the first Saturday every month from 10am-12pm Eastern
                    <br></br>
                    <br></br>
                    <u>Services and Pricing:</u>
                    <br></br>
                    <ul>
                        <li>Rabies Vaccination - $20 each</li>
                        <br></br>
                        <li>FVR-CP (Feline Distemper) Vaccination - $20 each</li>
                        <br></br>
                        <li>DHP-PV (Canine Distemper) Vaccination - $20 each</li>
                        <br></br>
                        <li>24PetWatch Microchip - $20</li>
                        <br></br>
                        <li>Rabies Vaccination - $20</li>
                        <br></br>
                        <li>Rabies Vaccination - $20</li>
                        <br></br>
                    </ul>
                </div>
            </div>
        </article>
    )
}



export default ClinicServices