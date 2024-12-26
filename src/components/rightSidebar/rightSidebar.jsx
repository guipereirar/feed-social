import SugestionUser from "../user/sugestionUser";

export default function RightSidebar() {
  return (
    <div
      style={{
        display: "flex",
        width: "25%",
        position: "sticky",
        top: "0",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "25px",
          paddingTop: "100px",
        }}
      >
        <p style={{ fontWeight: "bold" }}>Contas sugeridas</p>
        <SugestionUser />
      </div>
    </div>
  );
}
