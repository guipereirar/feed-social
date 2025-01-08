import Sidebar from "./components/sidebar/sidebar";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/home/home";
import Explore from "./pages/explore/explore";
import Settings from "./pages/settings/settings";
import { ThemeContext, ThemeProvider } from "./context/theme";
import { useContext } from "react";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Content />
      </BrowserRouter>
    </ThemeProvider>
  );
}

function Content() {
  const theme = useContext(ThemeContext);
  const night = theme.state.nightMode;
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: night ? "#000000" : "#f1f0f0",
        color: night ? "#ffffff" : "#000000",
      }}
    >
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App;
