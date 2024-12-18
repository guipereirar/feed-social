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
        <SugestionUser
          userIcon="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ4Zndt-rwuJItJJ1Kp5QQq2ylWyu_6Ok82A&s"
          username="user1"
          followers="9"
        />
        <SugestionUser
          userIcon="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ4Zndt-rwuJItJJ1Kp5QQq2ylWyu_6Ok82A&s"
          username="user2"
          followers="110"
        />
        <SugestionUser
          userIcon="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ4Zndt-rwuJItJJ1Kp5QQq2ylWyu_6Ok82A&s"
          username="user3"
          followers="65"
        />
        <SugestionUser
          userIcon="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ4Zndt-rwuJItJJ1Kp5QQq2ylWyu_6Ok82A&s"
          username="user4"
          followers="25"
        />
        <SugestionUser
          userIcon="https://media.licdn.com/dms/image/v2/C510BAQG31IToUUI-jQ/company-logo_200_200/company-logo_200_200/0/1630621387254/halaxy_logo?e=2147483647&v=beta&t=NfseyaOnADWUrkxez6pcNNJKmWvmVDDJ0zj1xWTOm3Q"
          username="sofiathemachine"
          followers="1m"
        />
      </div>
    </div>
  );
}
