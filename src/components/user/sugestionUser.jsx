export default function SugestionUser(props) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "40px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "13px",
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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "4px",
            width: "140px",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          <p>@{props.username}</p>
          <p>{props.followers} seguidores</p>
        </div>
      </div>
      <p style={{ fontWeight: "bold", color: "#007AFF" }}>Seguir</p>
    </div>
  );
}
