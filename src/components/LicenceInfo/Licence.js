import React, { useState, useEffect } from "react";
import {
  useHistory
} from "react-router-dom";

const Licence = (prop) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [licence, licenseDetails] = useState([]);
  
  const history = useHistory();
   const handleRoute = () =>{ 
      history.push("/appointment");
  }
  
  // this is the hardcoded url, need to make it dynamically based on the state/prop passed from car component.
  const locationService =    "http://localhost:8083/api/licence/Volkswagen/Jetta%20III/AABBCC11223344";
    
  useEffect(() => {
    fetch(locationService)
      .then((res) => res.json())
      .then(
        (data) => {
          setIsLoaded(true);
          licenseDetails(data);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  if (error) {
    return <div>Sorry, we can't tell you if this car is ready to sell, please call us at 033 123 45 67</div>;
    
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    
    return (
        <div style={{ width: "40%" }}>
          <table>
            <thead>
              <tr>
                <th>ChassisNumber</th>
                <th>Valid from</th>
                <th>Exp Date</th>
                <th>Licence Plate</th>
                <th>Appointment</th>
              </tr>
            </thead>
            <tbody>
              {licence.map((licenceI) => (
                <tr>
                  <td>{licenceI.c_number} </td>
                  <td>{licenceI.valid_from} </td>
                  <td>{licenceI.exp_date} </td>
                  <td>{licenceI.license_plate} </td>
                  <td>
                  <button onClick={handleRoute}>Book</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

    );
  

  
  }
  
};

export default Licence;
