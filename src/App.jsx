import Navbar from "./components/Navbar"
import Footer from "./components/footer"
import Resources from "./components/Resources"
import Contact from "./components/contact"
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "./components/home";
function App() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element:  <><Navbar /><Home /><Footer /></>
      },
      {
        path: "/contact",
        element: <><Navbar /><Contact /><Footer /></>
      },
       {
        path: "/resources",
        element: <><Navbar /><Resources /><Footer /></>
      }
    ]
  )
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
