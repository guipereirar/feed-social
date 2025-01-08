import { Image } from "lucide-react";
import { useContext } from "react";
import { ThemeContext } from "../../context/theme";

export default function UserPost() {
  const theme = useContext(ThemeContext);
  const night = theme.state.nightMode;
  return (
    <div
      style={{
        display: "flex",
        height: "100px",
        width: "600px",
        backgroundColor: night ? "#121212" : "#EAEAEA",
        border: night
          ? "1px solid rgba(255, 255, 255, 0.4)"
          : "1px solid rgba(0, 0, 0, 0.4)",
        borderRadius: "5px",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "15px",
          padding: "15px",
        }}
      >
        <img
          src="https://thispersondoesnotexist.com/"
          style={{
            height: "50px",
            borderRadius: "100%",
            objectFit: "cover",
            aspectRatio: "1",
          }}
        />
        <textarea
          style={{
            height: "80%",
            width: "350px",
            background: "transparent",
            border: "none",
            outline: "none",
            resize: "none",
            fontFamily: "Roboto",
          }}
          placeholder="O que você está pensando?"
          maxLength={128}
        ></textarea>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "flex-end",
          paddingBottom: "7px",
          paddingRight: "15px",
          gap: "8px",
        }}
      >
        <Image />
        <button
          style={{
            height: "25px",
            width: "100px",
            backgroundColor: night ? "#ffffff" : "#000000",
            color: night ? "#000000" : "#ffffff",
            fontWeight: "bold",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          Postar
        </button>
      </div>
    </div>
  );
}
