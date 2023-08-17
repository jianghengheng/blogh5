import React from 'react';

import './App.css';
import routers from './router'
import { useRoutes } from 'react-router-dom';
function App() {
  const router = useRoutes(routers)
  return (
    <div>
      {router}
    </div>
  );
}

export default App;
