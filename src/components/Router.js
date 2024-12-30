import { createBrowserRouter } from "react-router-dom";
import Signup from "./Signup";
import Login from "./auth/Login";
import About from "./About";
import Contact from "./Contact";
import App from "../App";
import Home from "./userarea/Home";
import List from "./userarea/List";
import Error from "./Error";
const router = createBrowserRouter([
  { path: "*", element: <Error /> },
  { path: "", element: <App /> },
  { path: "signup", element: <Signup /> },
  { path: "login", element: <Login /> },
  { path: "about", element: <About /> },
  { path: "contact", element: <Contact /> },
  { path: "userarea", element: <Home /> },
  { path: "list", element: <List /> },
]);
export default router;
