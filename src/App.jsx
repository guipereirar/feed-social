import Sidebar from "./components/sidebar/sidebar";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/home/home";
import Explore from "./pages/explore/explore";
import Settings from "./pages/settings/settings";

function App() {
  return (
    <BrowserRouter>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
