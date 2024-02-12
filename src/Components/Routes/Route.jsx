
import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Loginlayout from "../Layout/Loginlayout";
import HomeCountry from "../Layout/HomeCountry";
import Weatherinfo from "../Layout/Weatherinfo";
import Login from "../UserSIgnPage/Login";
import Register from "../UserSIgnPage/Register";
import PrivateRoute from "./PrivateRoute";
import Allcountry from "../Layout/Allcountry/Allcountry";


  const router = createBrowserRouter([
    {
      path:"/",
      element:<Loginlayout></Loginlayout>,
      children:[
          {
              path:"/",
              element:<Navigate to="/weather/info"></Navigate>
          },
          {
              path:"/login",
              element:<Login></Login>
          },
          {
              path:"/register",
              element:<Register></Register>
          },
         
      ]

  },
    {
      path: "/weather",
      element: <Main></Main>,
      children:[
        {
          path:":info",
          element:<HomeCountry></HomeCountry>
          
        },
        {
          path:":info/:cName",
          element:<PrivateRoute><Weatherinfo /></PrivateRoute>,
          loader:({params}) => fetch(`https://api.openweathermap.org/data/2.5/weather?q=${params.cName}&appid=15d62855a8cde5311ed5b82e995e2fd3`)
          // loader:({params}) => fetch(`https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=${params.latitude}&lon=${params.longitude}&appid=15d62855a8cde5311ed5b82e995e2fd3`)
     
          
          

        },
        // {
        //   path: ":info/:cName",
        //   // element: <Weatherinfo />,
        //   element: <PrivateRoute><Weatherinfo /></PrivateRoute>,
        //   loader: async ({ params }) => {
        //     try {
        //       const response = await fetch(`https://restcountries.com/v3.1/name/${params.cName}`);
        //       const data = await response.json();
        //       return data;
        //     } catch (error) {
        //       console.error('Error fetching country data:', error);
        //       return null;
        //     }
        //   }
        // },
        {
          path:"/weather/:info/:cName/country",
          element:<Allcountry></Allcountry>
        }
        
        
      ]
     
    },
  ]);
export default router;