import "./NavBar.css";

const NavBar = () => {
  return (
      <div className="entireNavBar">
          <nav className="navBar">
              <h1>Online Course Website</h1>
              <div className="whiteSpace"></div>
              <div className="pageLinks">
                  <a href="/">Home</a>
                  <a href="/your-courses">Your Courses</a>
                  <a href="/profile">Profile</a>
              </div>
          </nav>
      </div>
  );
}

export default NavBar;