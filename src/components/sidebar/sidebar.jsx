import LoggedUser from "../user/loggedUser";
import SidebarInfos from "./sidebarInfos";

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
        <LoggedUser
          userIcon="https://thispersondoesnotexist.com/"
          name="Usuário aleatório"
          username="random_user"
        />
        <SidebarInfos />
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
