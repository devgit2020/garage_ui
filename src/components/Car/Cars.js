import React, { useState, useEffect } from "react";
import { Link, generatePath, useRouteMatch } from "react-router-dom";

const Cars = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [cars, intializeCarList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8082/api/cars")
      .then((res) => res.json())
      .then(
        (data) => {
          setIsLoaded(true);
          intializeCarList(data);
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
            <th>Make</th>
            <th>Model</th>
            <th>Year</th>
            <th>Price</th>
          </tr>
         
          {cars.map( car => (
                      
            <tr>
                  <td> <a href={`http://localhost:8083/api/licence/${car.brand}/${car.model}/${car.chassisNumber}`} >{car.brand}</a></td>
                  <td>{car.model} </td>
                  <td>{car.year_model} </td>
                  <td>{car.selling_price} </td>
              </tr>
           
          ))}
         
        </table>
        
      </div>
    );
  }
};

export default Cars;
