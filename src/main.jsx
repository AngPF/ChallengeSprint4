import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Plans from './componentes/plans.jsx'
import Contract from './componentes/contract.jsx'
import Final from './componentes/final.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}></Route>
        <Route path='Plans' element={<Plans />}></Route>
        <Route path='Contract' element={<Contract />}></Route>
        <Route path='Final' element={<Final />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

