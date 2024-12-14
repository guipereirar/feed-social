import { Hash, House, Settings } from "lucide-react";

export default function Icon() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        paddingTop: "138px",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <div style={{ display: "flex", gap: "20px" }}>
          <House />
          <a style={{ fontSize: "20px", fontWeight: "bold" }}>Página Inicial</a>
        </div>
        <div style={{ display: "flex", gap: "20px" }}>
          <Hash />
          <a style={{ fontSize: "20px", fontWeight: "bold" }}>Explorar</a>
        </div>
        <div style={{ display: "flex", gap: "20px" }}>
          <Settings />
          <a style={{ fontSize: "20px", fontWeight: "bold" }}>Configurações</a>
        </div>
      </div>
    </div>
  );
}
