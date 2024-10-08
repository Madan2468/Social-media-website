import "./SideBar.css";
const Sidebar = ({ selectedTab, setSelectedTab }) => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-header">
        <a href="/" className="d-flex align-items-center text-white text-decoration-none mb-3">
          <svg className="bi pe-none me-2" width="40" height="32">
            <use xlinkHref="#bootstrap"></use>
          </svg>
          <span className="fs-4">Sidebar</span>
        </a>
      </div>
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item" onClick={() => setSelectedTab("Home")}>
          <a href="#" className={`nav-link ${selectedTab === "Home" ? "active" : "text-white"}`}>
            Home
          </a>
        </li>
        <li onClick={() => setSelectedTab("Create Post")}>
          <a href="#" className={`nav-link ${selectedTab === "Create Post" ? "active" : "text-white"}`}>
            Create Post
          </a>
        </li>
      </ul>
      <hr />
      <div className="dropdown">
        <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown">
          <img src="https://github.com/mdo.png" alt="Profile" width="32" height="32" className="rounded-circle me-2" />
          <strong>mdo</strong>
        </a>
        <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
          <li><a className="dropdown-item" href="#">New project...</a></li>
          <li><a className="dropdown-item" href="#">Settings</a></li>
          <li><a className="dropdown-item" href="#">Profile</a></li>
          <li><hr className="dropdown-divider" /></li>
          <li><a className="dropdown-item" href="#">Sign out</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
