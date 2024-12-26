export default function User(props) {
  return (
    <div
      style={{
        display: "flex",
        height: "80px",
        gap: "17px",
        paddingTop: "70px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        src={props.userIcon}
        style={{
          height: "60px",
          borderRadius: "100%",
          objectFit: "cover",
          aspectRatio: "1",
        }}
      />
      <div>
        <p style={{ fontSize: "15px", fontWeight: "bold" }}>{props.name}</p>
        <p style={{ fontSize: "13px" }}>@{props.username}</p>
      </div>
    </div>
  );
}
