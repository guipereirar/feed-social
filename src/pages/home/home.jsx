import FeedPost from "./feedPost";
import UserPost from "./userPost";
import SugestionSidebar from "./sugestionSidebar";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        paddingLeft: "15%",
        position: "sticky",
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
        <UserPost />
        <FeedPost />
      </div>
      <SugestionSidebar />
    </div>
  );
}
