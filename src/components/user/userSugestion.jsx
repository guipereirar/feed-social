import axios from "axios";
import { useEffect, useState } from "react";

const API_SEARCH_USER = "https://api.unsplash.com/photos/random";
const API_USER_DETAILS = "https://api.unsplash.com/users";

export default function UserSugestion() {
  const [usersInfo, setUsersInfo] = useState([]);
  const [followersCount, setFollowersCount] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        `${API_SEARCH_USER}?client_id=${import.meta.env.VITE_API_KEY}&count=5`
      );

      const users = response.data;
      setUsersInfo(users);

      const followersData = await Promise.all(
        users.map((user) =>
          axios
            .get(
              `${API_USER_DETAILS}/${user.user.username}?client_id=${
                import.meta.env.VITE_API_KEY
              }`
            )
            .then((res) => ({
              username: user.user.username,
              followers: res.data.followers_count,
            }))
        )
      );

      const followersMap = {};
      followersData.forEach(({ username, followers }) => {
        followersMap[username] = followers;
      });
      setFollowersCount(followersMap);

      setLoading(false);
    } catch (error) {
      console.error("Erro ao buscar usuários ou seguidores:", error);
    }
  };

  useEffect(() => {
    if (loading) {
      fetchUsers();
    }
  }, [loading]);

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
          <p>
            {followersCount[userInfo.user.username] !== undefined
              ? `${followersCount[userInfo.user.username]} seguidores`
              : ""}
          </p>
        </div>
      </div>
      <p style={{ fontWeight: "bold", color: "#007AFF", cursor: "pointer" }}>
        Seguir
      </p>
    </div>
  ));
}
