import { Moon, Sun } from "lucide-react";
import { useContext } from "react";
import { ThemeContext } from "../../context/theme";

export default function Toggle() {
  const theme = useContext(ThemeContext);
  const night = theme.state.nightMode;
  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        border: night ? "1px solid #000000" : "1px solid #ffffff",
        width: "50px",
        height: "25px",
        borderRadius: "20px",
        position: "relative",
      }}
    >
      <Sun />
      <Moon />
      <div
        style={{
          width: "25px",
          height: "25px",
          backgroundColor: night ? "#000000" : "#ffffff",
          borderRadius: "50px",
          position: "absolute",
          cursor: "pointer",
          left: night ? "25px" : "0px",
        }}
        onClick={handleClick}
      ></div>
    </div>
  );
}
