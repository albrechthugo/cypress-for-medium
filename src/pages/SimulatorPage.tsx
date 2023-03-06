import { Simulator } from '../components';
import { useLocation, Navigate } from 'react-router-dom';

export const SimulatorPage = () => {
  const location = useLocation();

  return location.state?.navigationFromHome ? <Simulator /> : <Navigate to='/' />;
};
