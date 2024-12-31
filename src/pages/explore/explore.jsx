import SugestedPost from "./sugestedPost";

export default function Explore() {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        paddingLeft: "15%",
      }}
    >
      <SugestedPost />
    </div>
  );
}
