import UserSugestion from "../../components/user/userSugestion.jsx";

export default function SugestionSidebar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "25%",
        height: "100vh",
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
        <UserSugestion />
      </div>
    </div>
  );
}
