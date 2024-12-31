import axios from "axios";
import { useEffect, useState } from "react";

const API_SEARCH_PHOTOS = "https://api.unsplash.com/photos/random";

export default function SugestedPost() {
  const [photos, setPhotos] = useState([]);

  const fetchPhotos = () => {
    axios
      .get(
        `${API_SEARCH_PHOTOS}?client_id=${
          import.meta.env.VITE_API_KEY
        }&count=24`
      )
      .then((response) => {
        setPhotos(response.data);
      });
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return photos.map((photo) => (
    <img
      key={photo.id}
      src={photo.urls.regular}
      style={{ height: "250px", objectFit: "cover", aspectRatio: "1" }}
    />
  ));
}
