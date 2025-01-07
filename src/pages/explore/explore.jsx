import { Search } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import axios from "axios";

const API_RANDOM_IMAGES = "https://api.unsplash.com/photos/random";
const API_SEARCH_IMAGES = "https://api.unsplash.com/search/photos";

export default function Explore() {
  const searchInput = useRef(null);
  const [images, setImages] = useState([]);

  const fetchRandomImages = () => {
    axios
      .get(
        `${API_RANDOM_IMAGES}?client_id=${
          import.meta.env.VITE_API_KEY
        }&count=24`
      )
      .then((response) => {
        setImages(response.data);
      })
      .catch((error) => {
        console.error("Erro ao carregar imagens:", error);
      });
  };

  const fetchSearchImages = () => {
    if (searchInput.current.value) {
      axios
        .get(
          `${API_SEARCH_IMAGES}?client_id=${
            import.meta.env.VITE_API_KEY
          }&query=${searchInput.current.value}&per_page=24`
        )
        .then((response) => {
          setImages(response.data.results);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    fetchRandomImages();
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();
    console.log(searchInput.current.value);
    fetchSearchImages();
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
        paddingTop: "25px",
        paddingLeft: "15%",
        gap: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "870px",
          height: "50px",
          borderRadius: "10px",
          backgroundColor: "white",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <form onSubmit={handleSearch}>
          <input
            style={{
              width: "800px",
              border: "none",
              boxSizing: "border-box",
              background: "transparent",
              outline: "none",
            }}
            placeholder="Pesquise por imagens!"
            ref={searchInput}
          />
          <button
            type="submit"
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            <Search size={20} />
          </button>
        </form>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          gap: "3px",
        }}
      >
        {images.map((image) => (
          <img
            key={image.id}
            src={image.urls.regular}
            style={{ height: "250px", objectFit: "cover", aspectRatio: "1" }}
          />
        ))}
      </div>
    </div>
  );
}
