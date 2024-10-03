import { useNavigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  if (!token) {
    navigate('/login');
  }

  return (
    <div>
        INSERT NAVBAR
        {children} 
        <br/>
        INSERT FOOTER
    </div>
  )
}

export default ProtectedRoute;
