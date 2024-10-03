import { useNavigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  if (!token) {
    navigate('/login');
  }

  return (
    <div>
        {children}
    </div>
  )
}

export default ProtectedRoute;