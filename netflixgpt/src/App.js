import Header from "./components/Header";
import {createBrowserRouter, Outlet} from "react-router-dom";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Browse from "./components/Browse";
function App() {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  );
}

export const appRouter = createBrowserRouter([
  {
    path : "/",
    element : <App/>,
    children : [
      {
        path : "/",
        element : <Login/>
      },
      {
        path : "/login",
        element : <Login/>
      },
      {
        path : "/browse",
        element : <Browse/>
      }

    ]
  }
])

export default App;
