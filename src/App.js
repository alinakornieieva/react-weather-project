import './App.css';
import Forecast from "./Forecast";

function App() {
  return (
    <div>
      <div className='main'>
      <Forecast defaultCity="London" />
      </div>
      <p><a href='https://github.com/alinakornieieva/react-weather-project' target="_blank" rel="noreferrer">Open-source code</a> by Alina Kornieieva</p>
    </div>
  );
}

export default App;
