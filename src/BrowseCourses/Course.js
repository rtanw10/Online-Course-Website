import "./Course.css";

const Course = ({courseImage, courseTitle, summary, duration, difficulty}) => {
    return (
        <div className="course">
            <img className="courseImage" src={courseImage} alt="courseImage"/>
                <div className="courseInformation">
                    <h3><b>{courseTitle}</b></h3>
                    <p>{summary}</p>
                    <p><b>Duration:</b> {duration}</p>
                    <p><b>Difficulty:</b> {difficulty}</p>
                    <button className="startCourseButton">Start Course</button>
                </div>
        </div>
    );
}

export default Course;