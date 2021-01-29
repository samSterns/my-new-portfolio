import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav/Nav';
import EmailForm from './Components/EmailForm/EmailForm';
import LandingPage from './Components/LandingPage/LandingPage';

function App() {
  return (
    <div className="App">
  
        <Nav />
        <LandingPage />
        <EmailForm />
    </div>
  );
}

export default App;
