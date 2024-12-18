import { useEffect, useState } from "react";
import FeedPost from "./feedPost";
import PostField from "./postField";
import axios from "axios";
import RelativeTime from "../../components/functions/relativeTime";
import RightSidebar from "../../components/rightSidebar/rightSidebar";

const API_URL = "https://api.unsplash.com/photos";

export default function Home() {
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

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        paddingLeft: "15%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "30px",
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
            date={RelativeTime(image.created_at)}
            postImage={image.urls.regular}
            likes={image.likes}
            username={image.user.username}
            description={image.alt_description}
          />
        ))}
      </div>
      <RightSidebar />
    </div>
  );
}
