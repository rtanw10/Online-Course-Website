import './App.css';
import NavBar from "./NavigationBar/NavBar";
import Home from "./HomePage/Home";
import YourCourses from "./YourCourses/YourCourses";
import TakeCourse from "./CoursePage/TakeCourse";

function App() {
  return (
    <div className="App">
      <NavBar />
        <div className="homePage">
            <Home />
        </div>
    </div>
  );
}

export default App;
