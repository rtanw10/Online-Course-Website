import "./TakeCourse.css";
import course from "../BrowseCourses/Course";
import {useState} from "react";

function TakeCourse() {
    let [courseVideo, setCourseVideo] = useState();
    courseVideo = "https://www.youtube.com/embed/w7ejDZ8SWv8?si=RYVRSn8UKKexWc2x";

    const changeToPreviousPage = () => {
        setCourseVideo("https://www.youtube.com/embed/MfIoAG3e7p4?si=_inPbUKBjHnfC-u_");
    };

    const changeToNextPage = () => {
        setCourseVideo("https://www.youtube.com/embed/RVFAyFWO4go?si=CgotGj_HCHk3syo5");
    };

    return (
        <div id="takingCourse">
            <div className="courseName">
                <h1>Course</h1>
                <br/>
                <h2>Complete this video to go to the next step</h2>
                <iframe width="560" height="315" src={courseVideo}
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

                <button className="back" onClick={changeToPreviousPage}>Back</button>
                <button className="next" onClick={changeToNextPage}>Next</button>
            </div>
        </div>
    );
}

export default TakeCourse;