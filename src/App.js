import './App.css';
import NavBar from './Components/NavBar';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import QA from './pages/qa_page';
import LoginPage from './pages/loginPage';
import Notification from './pages/notification';
import Following from './pages/following';
import LayotMassage from './pages/layot_massage';

function App() {
  return (
    <div className='App'>
      <div className='main'>
        {/* <NavBar></NavBar>
        <QA></QA> */}
        {/* <LoginPage></LoginPage> */}
        {/* <NavBar></NavBar>
        <Notification></Notification> */}
        {/* <NavBar></NavBar>
        <Following></Following> */}
        <NavBar></NavBar>
        <LayotMassage></LayotMassage>
        

      </div>
    </div>
  );
}

export default App;
