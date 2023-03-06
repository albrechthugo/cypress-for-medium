import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage, SimulatorPage } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: 'simulador',
    element: <SimulatorPage />
  }
]);

const App = () => <RouterProvider router={router} />;

export default App;
