import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Player from "./pages/Player";

import AuthContextProvider from "./contexts/AuthContextProvider";
import ProtectedRoute from "./components/ProtectedRoute";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      <BrowserRouter>
        <AuthContextProvider>
          <ToastContainer theme="dark" />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="/player/:id"
              element={
                <ProtectedRoute>
                  <Player />
                </ProtectedRoute>
              }
            />
          </Routes>
        </AuthContextProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
