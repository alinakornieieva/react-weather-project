import './App.css';
import Forecast from "./Forecast";

function App() {
  return (
    <div>
      <div className='main'>
      <Forecast defaultCity="London" />
      </div>
      <p><a href='/'>Open-source code</a> by Alina Kornieieva</p>
    </div>
  );
}

export default App;
