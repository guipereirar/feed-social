import User from "../user/user";
import SidebarIcons from "./sidebarIcons";

export default function Sidebar() {
  return (
    <div
      style={{
        width: "15%",
        height: "100vh",
        borderRight: "2px solid black",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div>
        <User
          imageUrl="https://thispersondoesnotexist.com/"
          name="Usuário aleatório"
          username="random_user"
        />
        <SidebarIcons />
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
