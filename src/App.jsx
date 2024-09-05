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

/* function App() {
  return (
    <div>
      <h1>Hello, World!</h1>
     
    </div>
  );
}

export default App; */