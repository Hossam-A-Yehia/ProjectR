import { Link } from "react-router-dom";
import "./topbar.css";
import { Search, Settings, Notifications } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft d-flex align-items-center justify-content-around">
        <Link to="/">
          <span className="logo">homyshop</span>
        </Link>
        <Link to="/login">
          <button className="btn btn-danger">Login</button>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarIcons">
          <Link to="update">
            <div className="topbarIconItem">
              <Settings />
              <span className="topbarIconBadge">2</span>
            </div>
          </Link>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <Link to="profile">
          <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
        </Link>
      </div>
    </div>
  );
}
