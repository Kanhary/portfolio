import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import MainDashboard from './Components/Main_Dashboard/MainDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/main-dashboard/*' element={<MainDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
