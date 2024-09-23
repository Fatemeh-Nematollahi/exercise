import { Link, Outlet } from "react-router-dom";
import MyNavbar from "../../Component/Nvbar/Navbar";
import "./blog.css";

function Bloge() {
  return (
    <div className="article">
      <MyNavbar />
      <h1>صفحه مقالات</h1>
      <hr />
      <div className="btnContainer">
        <Link to="php" className="linkBtn">php article</Link>
        <Link to="react" className="linkBtn">react article</Link>
        <Link to="js" className="linkBtn">js article</Link>
      </div>
      <hr />
    <Outlet/>
    </div>
  );
}

export default Bloge;
