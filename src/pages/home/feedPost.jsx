import { Heart, Share } from "lucide-react";

export default function FeedPost(props) {
  return (
    <div
      style={{
        height: "535px",
        width: "600px",
        backgroundColor: "#EAEAEA",
        border: "2px solid #787878",
        borderRadius: "5px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          paddingTop: "10px",
          paddingBottom: "10px",
          paddingLeft: "25px",
          paddingRight: "25px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <img
            src={props.userIcon}
            style={{
              height: "25px",
              borderRadius: "100%",
              objectFit: "cover",
              aspectRatio: "1",
            }}
          />
          <p
            style={{
              fontSize: "15px",
              fontWeight: "bold",
            }}
          >
            {props.name}
          </p>
        </div>
        <p
          style={{
            fontSize: "15px",
            whiteSpace: "nowrap",
          }}
        >
          {props.date}
        </p>
      </div>
      <img
        src={props.postImage}
        style={{ height: "400px", width: "600px", objectFit: "cover" }}
      ></img>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "15px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <button style={{ border: "none" }}>
              <Heart />
            </button>
            <p style={{ fontSize: "15px", fontWeight: "bold" }}>
              {props.likes}
            </p>
          </div>
        </div>
        <Share />
      </div>
      <div style={{ display: "flex", gap: "10px", paddingLeft: "15px" }}>
        <p style={{ fontSize: "15px", fontWeight: "bold" }}>{props.username}</p>
        <p style={{ fontSize: "15px" }}>{props.description}</p>
      </div>
    </div>
  );
}
