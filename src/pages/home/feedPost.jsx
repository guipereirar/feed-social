import { Heart, Share } from "lucide-react";
import RelativeTime from "../../components/functions/relativeTime";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../context/theme";

const API_URL = "https://api.unsplash.com/photos";

export default function FeedPost() {
  const theme = useContext(ThemeContext);
  const night = theme.state.nightMode;
  const [images, setImages] = useState([]);

  const fetchImages = () => {
    axios
      .get(`${API_URL}?client_id=${import.meta.env.VITE_API_KEY}`)
      .then((response) => {
        setImages(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return images.map((image) => (
    <div
      key={image.id}
      style={{
        height: "535px",
        width: "600px",
        backgroundColor: night ? "#EAEAEA" : "#121212",
        border: night
          ? "1px solid rgba(0, 0, 0, 0.4)"
          : "1px solid rgba(255, 255, 255, 0.4)",
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
            src={image.user.profile_image.medium}
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
            {image.user.name}
          </p>
        </div>
        <p
          style={{
            fontSize: "15px",
            whiteSpace: "nowrap",
          }}
        >
          {RelativeTime(image.created_at)}
        </p>
      </div>
      <img
        src={image.urls.regular}
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
            <Heart />

            <p style={{ fontSize: "15px", fontWeight: "bold" }}>
              {image.likes}
            </p>
          </div>
        </div>
        <Share />
      </div>
      <div style={{ display: "flex", gap: "10px", paddingLeft: "15px" }}>
        <p style={{ fontSize: "15px", fontWeight: "bold" }}>
          {image.user.username}
        </p>
        <p style={{ fontSize: "15px" }}>{image.alt_description}</p>
      </div>
    </div>
  ));
  // return (
  //);
}
