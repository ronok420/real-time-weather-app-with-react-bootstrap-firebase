import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider} from "react-router-dom";
import router from './Components/Routes/Route.jsx';
import Provider from './Components/Provider/Provider.jsx';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider>
       <RouterProvider router={router} />
    </Provider>
   
  </React.StrictMode>,
)
