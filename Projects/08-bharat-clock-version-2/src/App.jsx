import ClockHeading from './components/ClockHeading';
import ClockSlogan from './components/ClockSlogan';
import ClockTime from './components/CurrentTime';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'

function App() {
  return <center>
    <ClockHeading />
    <ClockSlogan />
    <ClockTime />
  </center>;
}

export default App;