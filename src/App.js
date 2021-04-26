import React, { useEffect, useState } from "react";
import { Switch, Route} from "react-router-dom";

import Header from "./Header/Header.jsx";
import Home from "./Home/Home.jsx";
import AdoptionProcess from "./AdoptionProcess/AdoptionProcess.jsx";
import PetList from "./PetList/PetList.jsx";
import PetDetails from "./PetDetails/PetDetails.jsx";
import FoodPantry from "./FoodPantry/FoodPantry.jsx";
import ClinicServices from "./ClinicServices/ClinicServices.jsx";
import Error from "./Error/Error.jsx";

import { isEmpty } from "lodash";


function App() {

  const [fetchedData, setFetchedData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      // performs a GET request
      const response = await fetch("https://run.mocky.io/v3/5d9ea3fd-9bad-41b8-b8f1-7cdc090b0d9e");
      const responseJson = await response.json();
      setFetchedData(responseJson);
    };

    if (isEmpty(fetchedData)) {
      fetchData();
    }
  }, [fetchedData]);

  return isEmpty(fetchedData) ? null : (
    <div classname = "App">
      <header>
      <nav>
          <Header/>
        </nav>
      </header>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/adoptionprocess" exact component={AdoptionProcess}/>
        <Route exact path="/petlist">
            <PetList articles={Object.values(fetchedData)} />
        </Route>
        <Route exact path={`/petlist/:slug`}
            render={({ match }) => {
              return fetchedData ? <PetDetails
                article={fetchedData[match.params.slug]}
              /> : null
            }}
          />
        <Route path="/foodpantry" exact component={FoodPantry}/>
        <Route path="/clinicservices" exact component={ClinicServices}/>  
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;