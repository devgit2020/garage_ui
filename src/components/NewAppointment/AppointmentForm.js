import React,{useState} from "react";
import { useHistory} from "react-router-dom";

import "./Appointment.css";

const AppointmentForm = () => {
  const history = useHistory();

  const handleRoute = () => {
    history.push("/");
  };
  
  const [appointment, setInputs] = useState({});
  const [statusMsg, setStatus] = useState();

  const handlSubmit = (e) => {
    e.preventDefault();
    fetchText();
  };

  async function fetchText() {
    let response = await  fetch("http://localhost:8084/api/appointment/", {
      method: "POST",
      headers: { "Content-Type": "application/json;charset=UTF-8" },
      body: JSON.stringify(appointment),
  }).catch((error) => {
        console.log(error)
  });

  if(response){
    setStatus(await response.text());
  }
 }

  const handleChange = (event) => {
    setInputs(values => ({...values, [event.target.name]: event.target.value}))
  }

  return (
    <form onSubmit={handlSubmit}>
      <div className="new-appointment__controls">
        <h2>Create a new appointment !</h2>
        <div className="new-appointment__control">
          <label>Name</label>
          <input type="text" name ="name" required value={appointment.name || ""} onChange={handleChange} />
        </div>
        <div className="new-appointment__control">
          <label>Model</label>
          <input type="text" name="model" required value={appointment.model || ""} onChange={handleChange}/>
        </div>
        <div className="new-appointment__control">
          <label>Date</label>
          <input  type="date"  required name="date" placeholder="yyyy-mm-dd"   value={appointment.date} onChange={handleChange} />
        </div>
        <div className="new-appointment__control">
          <label>Time</label>
          <input type="time" name="time"    required value={appointment.time} min='09:00' max= '19:00' onChange={handleChange} />
        </div>
        <div className="new-appointment__control">
          <label>{statusMsg}</label>
        </div>
      </div>
      <div className="new-appointment__actions">
        <button type="submit">Book Appointment</button>
      </div>
      <div className="new-appointment__actions">
        <button onClick={handleRoute}> Back </button>
      </div>
    </form>
  );
};

export default AppointmentForm;
