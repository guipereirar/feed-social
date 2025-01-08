import { Hash, House, Settings } from "lucide-react";
import User from "../user/user";
import { NavLink } from "react-router";
import { useContext } from "react";
import { ThemeContext } from "../../context/theme";

export default function Sidebar() {
  const theme = useContext(ThemeContext);
  const night = theme.state.nightMode;
  return (
    <div
      style={{
        width: "15%",
        height: "100vh",
        borderRight: night
          ? "1px solid rgba(255, 255, 255, 0.4)"
          : "1px solid rgba(0, 0, 0, 0.4)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "fixed",
      }}
    >
      <div>
        <User
          userIcon="https://thispersondoesnotexist.com/"
          name="Usuário aleatório"
          username="random_user"
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "190px",
          }}
        >
          <div
            style={{ display: "flex", flexDirection: "column", gap: "15px" }}
          >
            <NavLink
              to="/"
              style={{
                textDecoration: "none",
                color: night ? "#ffffff" : "#000000",
              }}
            >
              <div style={{ display: "flex", gap: "20px" }}>
                <House />
                <p style={{ fontSize: "20px", fontWeight: "bold" }}>
                  Página Inicial
                </p>
              </div>
            </NavLink>
            <NavLink
              to="/explore"
              style={{
                textDecoration: "none",
                color: night ? "#ffffff" : "#000000",
              }}
            >
              <div style={{ display: "flex", gap: "20px" }}>
                <Hash />
                <p style={{ fontSize: "20px", fontWeight: "bold" }}>Explorar</p>
              </div>
            </NavLink>
            <NavLink
              to="/settings"
              style={{
                textDecoration: "none",
                color: night ? "#ffffff" : "#000000",
              }}
            >
              <div style={{ display: "flex", gap: "20px" }}>
                <Settings />
                <p style={{ fontSize: "20px", fontWeight: "bold" }}>
                  Configurações
                </p>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          paddingBottom: "50px",
        }}
      >
        <p
          style={{
            fontFamily: "Lexend",
            fontSize: "40px",
            fontWeight: "bold",
          }}
        >
          feed
        </p>
      </div>
    </div>
  );
}
