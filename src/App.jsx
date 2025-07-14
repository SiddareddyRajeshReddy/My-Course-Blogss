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
        element: <Home />
      },
      {
        path: "/contact",
        element: <Contact />
      },
       {
        path: "/resources",
        element: <Resources />
      }
    ]
  )
  return (
    <>
    <Navbar />
    <RouterProvider router={router}/>
    <Footer />
    </>
  )
}

export default App
