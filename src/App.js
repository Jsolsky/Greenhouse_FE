import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import ProtectedRoute from './components/protectedRoute';
import Dashboard from './pages/dashboard';
import Login from './pages/login';
import CreateUser from './pages/createUser';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/createUser" element={<CreateUser />} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        {/* <Route path="/data" element={<ProtectedRoute><Data /></ProtectedRoute>} /> */}
        {/* <Route path="/setting" element={<ProtectedRoute><Setting /></ProtectedRoute>} /> */}
        {/* Redirect to login if no route matches */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
