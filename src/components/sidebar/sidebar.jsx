import { Hash, House, Settings } from "lucide-react";
import User from "../user/user";

export default function Sidebar() {
  return (
    <div
      style={{
        width: "15%",
        height: "100vh",
        borderRight: "1px solid #787878",
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
            paddingTop: "138px",
          }}
        >
          <div
            style={{ display: "flex", flexDirection: "column", gap: "15px" }}
          >
            <div style={{ display: "flex", gap: "20px" }}>
              <House />
              <a style={{ fontSize: "20px", fontWeight: "bold" }}>
                Página Inicial
              </a>
            </div>
            <div style={{ display: "flex", gap: "20px" }}>
              <Hash />
              <a style={{ fontSize: "20px", fontWeight: "bold" }}>Explorar</a>
            </div>
            <div style={{ display: "flex", gap: "20px" }}>
              <Settings />
              <a style={{ fontSize: "20px", fontWeight: "bold" }}>
                Configurações
              </a>
            </div>
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
