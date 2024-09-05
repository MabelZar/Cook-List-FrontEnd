import React from 'react';
import './App.css'
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { MealProvider} from './context/MealContext';

function App() {
  return (
    <React.StrictMode> 
      <MealProvider>
        <RouterProvider router={router}/>
      </MealProvider>
    </React.StrictMode> 
  )
}

export default App
