import FeedPost from "./feedPost";
import PostField from "./postField";
import RightSidebar from "../../components/rightSidebar/rightSidebar";

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
        <PostField />
        <FeedPost />
      </div>
      <RightSidebar />
    </div>
  );
}
