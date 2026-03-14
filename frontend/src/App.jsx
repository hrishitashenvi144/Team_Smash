import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import DiscoverResources from "./pages/DiscoverResources";
import PostResources from "./pages/PostResources";
import Dashboard from "./pages/Dashboard";

function App() {

  const isLoggedIn = localStorage.getItem("user");

  return (
    <BrowserRouter>

      <Routes>

        {/* Auth pages */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* App pages */}
        {isLoggedIn && (
          <>
            <Route path="/discover" element={<DiscoverResources />} />
            <Route path="/post" element={<PostResources />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </>
        )}

      </Routes>

    </BrowserRouter>
  );
}

export default App;