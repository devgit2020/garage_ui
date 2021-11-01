import React, { useState, useEffect } from "react";
import {
  Link,
  generatePath,
  useRouteMatch,
  useLocation,
  useParams,
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

  console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.Hello World Licnce"+prop.make);

  const locationService =
    "http://localhost:8083/api/licence/Volkswagen/Jetta%20III/AABBCC11223344";
    
   

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
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    
    return (
        <div style={{ width: "40%" }}>
          <table>
            <tr>
              <th>ChassisNumber</th>
              <th>Valid from</th>
              <th>Exp Date</th>
              <th>Licence Plate</th>
              <th>Appointment</th>
            </tr>

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
          </table>
        </div>

    );
  

  
  }
  
};

export default Licence;
