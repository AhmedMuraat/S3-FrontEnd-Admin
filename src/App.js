import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Home } from "./Pages/HomePage/Home";
import { Albums } from "./Pages/Albums/Albums";
import { Tracks } from "./Pages/Tracks/Tracks";
import { TracksInfo } from "./Pages/Tracks/TracksInfo";
import { Login } from "./Pages/LoginPage/Login";
import { Register } from "./Pages/Register/Register";

export function App() {

  console.log("ttt", JSON.parse(localStorage.getItem("Token")))
  var userData = JSON.parse(localStorage.getItem("Token"));
  const loggedInUser = userData !== null ? userData.accessToken.length > 0 && new Date(userData.tblRefreshTokens[0].expiryDate).getTime() > new Date(Date.now()).getTime() : false;

  return (
      <Routes>
        <Route
          path="/"
          element={loggedInUser ? <Home /> : <Navigate replace to={"/Login"} />}
        />
        <Route
          path="/Albums"
          element={
            loggedInUser ? <Albums /> : <Navigate replace to={"/Login"} />
          }
        />
        <Route
          path="/Tracks"
          element={
            loggedInUser ? <Tracks /> : <Navigate replace to={"/Login"} />
          }
          
        />
        <Route
          path="/Tracks/Add"
          element={
            loggedInUser ? <TracksInfo /> : <Navigate replace to={"/Login"} />
          }
          
        />
        <Route
          path="/Login"
          element={!loggedInUser ? <Login /> : <Navigate replace to={"/"} />}
        />
        <Route
          path="/Register"
          element={!loggedInUser ? <Register /> : <Navigate replace to={"/"} />}
        />
      </Routes>
  );
}

export default App;
