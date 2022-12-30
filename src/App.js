
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import ShowDetails from './components/ShowDetails';
import Shows from './components/Shows';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Shows />
  },
  {
    path: "/show/:id",
    element: <ShowDetails />
  }
])

function App() {
  return (
    <div className='w-[90%] mx-auto'>
      <RouterProvider router={router}>
        <Shows />
      </RouterProvider>
    </div>

  );
}

export default App;
