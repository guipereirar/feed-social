import axios from "axios";
import { useEffect, useState } from "react";

const API_SEARCH_USER = "https://api.unsplash.com/photos/random";

export default function UserSugestion() {
  const [usersInfo, setUsersInfo] = useState([]);

  const fetchUsername = () => {
    axios
      .get(
        `${API_SEARCH_USER}?client_id=${import.meta.env.VITE_API_KEY}&count=5`
      )
      .then((response) => {
        setUsersInfo(response.data);
      });
  };

  useEffect(() => {
    fetchUsername();
  }, []);

  return usersInfo.map((userInfo) => (
    <div
      key={userInfo.id}
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
          src={userInfo.user.profile_image.medium}
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
          <p>@{userInfo.user.username}</p>
          <p>{userInfo.user.total_photos} fotos</p>
        </div>
      </div>
      <p style={{ fontWeight: "bold", color: "#007AFF" }}>Seguir</p>
    </div>
  ));
}
