import Toggle from "../../components/toggle/toggle";

export default function Settings() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        paddingTop: "75px",
        marginLeft: "18%",
        gap: "30px",
        width: "100vw",
        height: "100vh",
      }}
    >
      <h2>Configurações</h2>
      <div>
        <h3>Modo escuro</h3>
        <Toggle />
      </div>
    </div>
  );
}
