import React, { useState } from "react";
import styles from "./Form.module.css";

const Form = () => {
  const [submittedForm, setSubmittedForm] = useState();
  function onSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log("DATA", data.get("foo"));
    setSubmittedForm(data);
  };

  return (
    <div>
      <hr></hr>
      <h2>Adoption Questionnaire</h2>
      {
        submittedForm ? (
          <div>
            <div>
              Thank you for submitting your application questionnaire. 
              <br></br>
              Your form was received, and we are now reviewing your responses. 
              <br></br>
              You can expect to hear from us within 48 hours regarding next steps. 
              <br></br>
              Please see below for a summary of your responses: 
              <br></br>
              <br></br>
            </div>
            <div>
            <table className= {styles.table}>
                <tr>
                    <th>Name</th>
                    <td>{submittedForm.get("myName")}</td>
                </tr>
                <tr>
                    <th>Age</th>
                    <td>{submittedForm.get("Age")}</td>
                </tr>
                <tr>
                    <th>Address</th>
                    <td>{submittedForm.get("myAddress")}</td>
                </tr>
                <tr>
                    <th>City</th>
                    <td>{submittedForm.get("myCity")}</td>
                </tr>
                <tr>
                    <th>State</th>
                    <td>{submittedForm.get("myState")}</td>
                </tr>
                <tr>
                    <th>Zip Code</th>
                    <td>{submittedForm.get("myZip")}</td>
                </tr>
                <tr>
                    <th>Acknowledgement</th>
                    <td>{submittedForm.get("myConfirmation")}</td>
                </tr>
            </table>
            </div>
          </div>
        ) : (
          <form onSubmit={onSubmit}>
            <label htmlFor="myNameId">Name</label><br></br>
            <input type="text" name="myName" required id="myNameId"/>
            <br></br>

            <label htmlFor="myAgeId">Age</label><br></br>
            <input type="number" name="Age" id="myAgeId"/>
            <br></br>

            <label htmlFor="myAddressId">Street Address</label><br></br>
            <input type="text" name="myAddress" id="myAddressId"/>
            <br></br>

            <label htmlFor="myCityId">City</label><br></br>
            <input type="text" name="myCity" id="myCityId"/>
            <br></br>

            <label htmlFor="myStateId">State</label><br></br>
            <select name="myState" id="myStateId">
              <option value="Delaware">Delaware</option>
              <option value="Pennsylvania">Pennsylvania</option>
              <option value="New Jersey">New Jersey</option>
              <option value="Maryland">Maryland</option>
              <option value="Other">Other</option>
            </select>
            <br></br>

            <label htmlFor="myZipId">Zip Code</label><br></br>
            <input type="number" name="myZip" id="myZipId"/>
            <br></br>

            <label>If selected, which would be the best day to visit?</label><br></br>
            <input type="radio" id="monday" value="Monday"></input>
              <label for="monday">Monday</label>
            <input type="radio" id="tuesday" value="Tuesday"></input>
              <label for="tuesday">Tuesday</label>
            <input type="radio" id="wednesday" value="Wednesday"></input>
              <label for="wednesday">Wednesday</label>
            <input type="radio" id="thursday" value="Thursday"></input>
              <label for="thursday">Thursday</label>
            <input type="radio" id="friday" value="Friday"></input>
              <label for="friday">Friday</label>
            <input type="radio" id="saturday" value="Saturday"></input>
              <label for="saturday">Saturday</label>
            <input type="radio" id="sunday" value="Sunday"></input>
              <label for="Sunday">Sunday</label>
            <br></br>

            <label htmlFor="myConfirmationId">I acknowledge that this application does not yet mean that I have adopted a pet.</label>
            <select name="myConfirmation" id="myConfirmationId">
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="Maybe">Maybe</option>
            </select>
            <br></br>


            <input type="submit" value="Send it" />
          </form>
        )
      }
    </div>
  )
}

export default Form
