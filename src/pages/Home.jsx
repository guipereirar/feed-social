import { useEffect, useState } from "react";
import FeedPost from "../components/feedPost/feedPost";
import PostField from "../components/postField/postField";
import axios from "axios";

const API_URL = "https://api.unsplash.com/photos";

export default function Home() {
  const [images, setImages] = useState([]);

  const fetchImages = () => {
    axios
      .get(`${API_URL}?client_id=${import.meta.env.VITE_API_KEY}`)
      .then((response) => {
        setImages(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "70px",
        width: "100%",
        paddingTop: "70px",
      }}
    >
      <PostField />
      {images.map((image) => (
        <FeedPost
          key={image.id}
          userIcon={image.user.profile_image.medium}
          name={image.user.name}
          postImage={image.urls.regular}
          likes={image.likes}
          comments="0"
          username={image.user.username}
          description={image.alt_description}
        />
      ))}
    </div>
  );
}
