import "./profile.css";
import Topbar from "../../components/home/topbar/Topbar";
import Sidebar from "../../components/home/sidebar/Sidebar";
import Feed from "../../components/home/feed/Feed";
import Rightbar from "../../components/home/rightbar/Rightbar";

export default function Profile() {
  return (
    <>
      <div className="profile">
        {/* <Sidebar /> */}
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="assets/post/3.jpeg"
                alt=""
              />
              <img
                className="profileUserImg"
                src="assets/person/7.jpeg"
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Safak Kocaoglu</h4>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed pro />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}
