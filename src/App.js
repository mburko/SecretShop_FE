import './App.css';
import NavBar from './Components/NavBar';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import QA from './pages/qa_page';
function App() {
  return (
    <div className='App'>
      <div className='main'>
        <NavBar></NavBar>
        <QA></QA>
      </div>
    </div>
  );
}

export default App;
