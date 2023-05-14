import Topbar from "../../components/home/topbar/Topbar";
import Sidebar from "../../components/home/sidebar/Sidebar";
import Feed from "../../components/home/feed/Feed";
import Rightbar from "../../components/home/rightbar/Rightbar";
import "./home.css";

export default function Home() {
  return (
    <>
      <div className="homeContainer">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </>
  );
}
