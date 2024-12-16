import Sidebar from "./components/sidebar/sidebar";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/home/home";

function App() {
  return (
    <BrowserRouter>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
