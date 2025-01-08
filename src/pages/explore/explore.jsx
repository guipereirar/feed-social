import { Search } from "lucide-react";
import { useEffect, useState, useRef, useContext } from "react";
import axios from "axios";
import { ThemeContext } from "../../context/theme";

const API_RANDOM_IMAGES = "https://api.unsplash.com/photos/random";
const API_SEARCH_IMAGES = "https://api.unsplash.com/search/photos";

export default function Explore() {
  const theme = useContext(ThemeContext);
  const night = theme.state.nightMode;
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
          console.error("Erro ao buscar imagens:", error);
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
        marginLeft: "15%",
        gap: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "870px",
          height: "50px",
          borderRadius: "10px",
          backgroundColor: night ? "#121212" : "#ffffff",
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
              color: night ? "#ffffff" : "#000000",
            }}
            placeholder="Pesquise por imagens!"
            ref={searchInput}
          />
          <button
            type="submit"
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            <Search
              size={20}
              style={{ color: night ? "#ffffff" : "#000000" }}
            />
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
