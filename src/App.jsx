import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Footer from "./Components/Footer";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import UserContext from "./Context/UserContext";

function App() {
  let userCtx = useContext(UserContext);
  let login = userCtx.userData.login;
  // console.log(login)
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
       <div className="pt-10 md:pt-[70px]">
       <Routes>
          <Route
            path="/"
            element={login == true ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            path="/cart"
            element={login == true ? <Cart /> : <Navigate to="/login" />}
          />
          <Route
            path="/signup"
            element={login == false ? <Signup /> : <Navigate to="/" />}
          />
          <Route
            path="/login"
            element={login == false ? <Login /> : <Navigate to="/" />}
          />
        </Routes>
       </div>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
