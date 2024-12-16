import { Image } from "lucide-react";

export default function PostField() {
  return (
    <div
      style={{
        display: "flex",
        height: "100px",
        width: "600px",
        backgroundColor: "#EAEAEA",
        border: "2px solid #787878",
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
            backgroundColor: "black",
            color: "white",
            fontWeight: "bold",
            border: "none",
            borderRadius: "10px",
          }}
        >
          Postar
        </button>
      </div>
    </div>
  );
}
