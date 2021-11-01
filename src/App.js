import './App.css';
import AppointmentForm from  './components/NewAppointment/AppointmentForm';
import CarList            from './components/Car/CarList';


const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <CarList />
      </header>
    </div>
  );
}

export default App;
