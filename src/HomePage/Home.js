import "./Home.css";

const Home = () => {
  return (
      <div className="homePage">
          <div className="landingPage">
              <div className="takeCourseDescription">
                  <h2 className="landingTitle">Take Courses to Level Up your Skills</h2>
                  <p className="landingDescription">Want to learn something new or try a new skill? We offer free courses for people like you to gain new skills and achieve big goals! Browse our available courses and start one that suits you</p>
                  <button className="findCourseButton">Find a Course</button>
              </div>
              <img src="https://www.windsor-forest.ac.uk/app/uploads/2022/11/1920-x-1080-7-1.jpg" alt="Image of People Taking Courses"/>
          </div>
      </div>
  );
}

export default Home;