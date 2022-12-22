import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import isLogged from '../isLogged';

export default function MyRoute({ element: Element, isClosed }) {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (isClosed && !isLogged) {
      setTimeout(() => {
        return navigate('/login', {
          state: { previousPath: location.pathname },
        });
      });
    }
  }, [isClosed, location.pathname, navigate]);
  return Element;
}
