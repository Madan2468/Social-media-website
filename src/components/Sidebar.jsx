import { useState } from "react";

const Sidebar = ({ selectedTab, setSelectedTab }) => {
  const [isOffcanvasVisible, setIsOffcanvasVisible] = useState(false);

  const handleToggle = () => {
    setIsOffcanvasVisible(!isOffcanvasVisible);
  };

  return (
    <>
      <button
        className="btn btn-dark d-md-none position-absolute top-0 start-0 m-2"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasSidebar"
        aria-controls="offcanvasSidebar"
        onClick={handleToggle}
      >
        ☰ Menu
      </button>

      <div
        className="d-none d-md-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar"
        style={{ width: "180px" }}
      >
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <svg className="bi pe-none me-2" width="40" height="32">
            <use xlinkHref="#bootstrap"></use>
          </svg>
          <span className="fs-4">Sidebar</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li
            className="nav-item"
            onClick={() => {
              setSelectedTab("Home");
            }}
          >
            <a
              href="#"
              className={`nav-link text-white ${
                selectedTab === "Home" && "active"
              }`}
              aria-current="page"
            >
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#home"></use>
              </svg>
              Home
            </a>
          </li>
          <li
            onClick={() => {
              setSelectedTab("Create Post");
            }}
          >
            <a
              href="#"
              className={`nav-link text-white ${
                selectedTab === "Create Post" && "active"
              }`}
            >
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#speedometer2"></use>
              </svg>
              Create Post
            </a>
          </li>
        </ul>
        <hr />
        <div className="dropdown">
          <a
            href="#"
            className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://github.com/mdo.png"
              alt=""
              width="32"
              height="32"
              className="rounded-circle me-2"
            />
            <strong>mdo</strong>
          </a>
          <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
            <li>
              <a className="dropdown-item" href="#">
                New project...
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Settings
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Profile
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div
        className={`offcanvas offcanvas-start ${
          isOffcanvasVisible ? "show" : ""
        }`}
        tabIndex="-1"
        id="offcanvasSidebar"
        aria-labelledby="offcanvasSidebarLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasSidebarLabel">
            Sidebar
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            onClick={handleToggle}
          ></button>
        </div>
        <div className="offcanvas-body text-bg-dark">
          <ul className="nav nav-pills flex-column mb-auto">
            <li
              className="nav-item"
              onClick={() => {
                setSelectedTab("Home");
                handleToggle();
              }}
            >
              <a
                href="#"
                className={`nav-link text-white ${
                  selectedTab === "Home" && "active"
                }`}
                aria-current="page"
              >
                <svg className="bi pe-none me-2" width="16" height="16">
                  <use xlinkHref="#home"></use>
                </svg>
                Home
              </a>
            </li>
            <li
              onClick={() => {
                setSelectedTab("Create Post");
                handleToggle();
              }}
            >
              <a
                href="#"
                className={`nav-link text-white ${
                  selectedTab === "Create Post" && "active"
                }`}
              >
                <svg className="bi pe-none me-2" width="16" height="16">
                  <use xlinkHref="#speedometer2"></use>
                </svg>
                Create Post
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
