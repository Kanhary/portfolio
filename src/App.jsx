import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Components/Login';
import MainDashboard from './Components/Main_Dashboard/MainDashboard';

function App() {
  return (
    <Router>
      <Routes>
        {/* Login route */}
        <Route path="/" element={<Login />} />
        {/* Redirect root path to /main-dashboard */}
        {/* <Route path="/" element={<Navigate to="/main-dashboard" />} /> */}
        
        {/* Main Dashboard route */}
        <Route path="/main-dashboard/*" element={<MainDashboard />} />
        
        
      </Routes>
    </Router>
  );
}

export default App;
