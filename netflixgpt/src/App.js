import {createBrowserRouter, Outlet} from "react-router-dom";
import Login from "./components/Login";
import Browse from "./components/Browse";
import Body from "./components/Body";
function App() {
  return (
      <Outlet/>
  );
}

export const appRouter = createBrowserRouter([
  {
    path : "/",
    element : <App/>,
    children : [
      {
        path : "/",
        element : <Body/>
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
