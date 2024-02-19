import './App.css';
import AboutPage from './pages/aboutPage/AboutPage';
import MainPage from './pages/mainPage/MainPage';
import ChangeAboutTitle from "./components/ChangeAboutTitle";
import ContactsPage from './pages/contactsPage/ContactsPage';
import CounterPage from './pages/counterPage/CounterPage';


function App() {
  return (
    <div className="app">
      {/* <MainPage />
      <AboutPage />
      <ChangeAboutTitle />
      <ContactsPage /> */}
      <CounterPage />
    </div>
  );
}
export default App;
