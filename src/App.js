import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbars from "./components/Navbars";
import Contactform from "./Contactform";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import AddContact from "./components/AddContact"; 
import ContactFormEdit from "./components/ContactFormEdit";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbars />
        <Content />
      </div>
    </Router>
  );
}

function Content() {
  const location = useLocation();
  const isAppPage = location.pathname === '/';

  return (
    <div className="content">
      {isAppPage && <Contactform />}
      <Routes>
        
        <Route path="/addcontact" element={<AddContact />} />
        <Route path="/edit/:id" element={<ContactFormEdit />} />
      </Routes>
    </div>
  );
}


export default App;
