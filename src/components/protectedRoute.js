import { useNavigate } from 'react-router-dom';
import Navbar from "./navbar.js";

function ProtectedRoute({ children }) {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  if (!token) {
    navigate('/login');
  }

  return (
    <div>
        <Navbar />
        {children} 
        <br/>
        INSERT FOOTER
    </div>
  )
}

export default ProtectedRoute;
