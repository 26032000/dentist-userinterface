import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useRequireAuth = () => {
  const history = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      
      history.push('/login');
    }
  }, [history]);

  return true; 
};
