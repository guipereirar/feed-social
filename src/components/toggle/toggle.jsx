import { Moon, Sun } from "lucide-react";
import { useContext, useEffect } from "react";
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
        border: night ? "2px solid #ffffff" : "2px solid #000000",
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
          backgroundColor: night ? "#ffffff" : "#000000",
          borderRadius: "50px",
          position: "absolute",
          cursor: "pointer",
          left: night ? "0px" : "25px",
        }}
        onClick={handleClick}
      ></div>
    </div>
  );
}
