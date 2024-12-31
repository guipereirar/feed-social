import { Switch } from "@mui/material";

export default function Settings() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        paddingTop: "75px",
        paddingLeft: "18%",
        gap: "30px",
      }}
    >
      <h2>Configurações</h2>
      <div>
        <h3>Modo escuro</h3>
        <Switch />
      </div>
    </div>
  );
}
