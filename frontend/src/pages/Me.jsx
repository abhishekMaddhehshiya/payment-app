import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Me = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the token is stored in localStorage
    const token = localStorage.getItem('token');

    if (token) {
      // Token exists, redirect to /dashboard
      navigate('/dashboard');
    } else {
      // No token, redirect to /signin
      navigate('/signin');
    }
  }, [navigate]);

  // Optionally, render a loading spinner or message
  return null;
};

export default Me;