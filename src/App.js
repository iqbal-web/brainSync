import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Presntation from './pages/Presntation';
import Share from './pages/Share';
import Privacy from './pages/Privacy';
import Contact from './pages/Contact';
import Error from './pages/Error'; // Make sure you have this component

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/presntation" element={<Presntation />} />
        <Route exact path="/share" element={<Share />} />
        <Route exact path="/privacy" element={<Privacy />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
