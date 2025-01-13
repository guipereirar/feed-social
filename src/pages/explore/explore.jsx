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
  const [loading, setLoading] = useState(true);

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
          setLoading(false);
        })
        .catch((error) => {
          console.error("Erro ao buscar imagens:", error);
        });
    }
  };

  const handleSearch = (event) => {
    event.preventDefault();
    console.log(searchInput.current.value);
    fetchSearchImages();
  };

  const handleFilter = (filter) => {
    searchInput.current.value = filter;
    fetchSearchImages();
  };

  useEffect(() => {
    if (loading) {
      fetchRandomImages();
    }
  }, [loading]);

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
          backgroundColor: night ? "#121212" : "#D9D9D9",
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
              fontSize: "16px",
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
      <div style={{ display: "flex", flexDirection: "row", gap: "50px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: night ? "#121212" : "#D9D9D9",
            width: "230px",
            height: "35px",
            borderRadius: "10px",
            cursor: "pointer",
            color: night ? "#ffffff" : "#000000",
            fontWeight: "bold",
          }}
          onClick={() => handleFilter("cats")}
        >
          Gatos
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: night ? "#121212" : "#D9D9D9",
            width: "230px",
            height: "35px",
            borderRadius: "10px",
            cursor: "pointer",
            color: night ? "#ffffff" : "#000000",
            fontWeight: "bold",
          }}
          onClick={() => handleFilter("moon")}
        >
          Lua
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: night ? "#121212" : "#D9D9D9",
            width: "230px",
            height: "35px",
            borderRadius: "10px",
            cursor: "pointer",
            color: night ? "#ffffff" : "#000000",
            fontWeight: "bold",
          }}
          onClick={() => handleFilter("landscape")}
        >
          Paisagem
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: night ? "#121212" : "#D9D9D9",
            width: "230px",
            height: "35px",
            borderRadius: "10px",
            cursor: "pointer",
            color: night ? "#ffffff" : "#000000",
            fontWeight: "bold",
          }}
          onClick={() => handleFilter("haircuts")}
        >
          Cortes de cabelo
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: night ? "#121212" : "#D9D9D9",
            width: "230px",
            height: "35px",
            borderRadius: "10px",
            cursor: "pointer",
            color: night ? "#ffffff" : "#000000",
            fontWeight: "bold",
          }}
          onClick={() => handleFilter("flowers")}
        >
          Flores
        </div>
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
            style={{
              height: "250px",
              objectFit: "cover",
              aspectRatio: "1",
              borderRadius: "5px",
            }}
          />
        ))}
      </div>
    </div>
  );
}
