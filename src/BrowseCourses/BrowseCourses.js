import Course from "./Course";

const allCourses = [
    {
        courseImage: "https://www.csdt.co.in/assets/img/react.png",
        courseTitle: "React.js Development",
        summary: "Learn the Basics of React.js",
        duration: "3 hours",
        difficulty: "Beginner",
    },
    {
        courseImage: "https://images.ctfassets.net/aq13lwl6616q/4wW7nnU5Nuuf9DHIIcO4Zo/7838e981e306b0148c4f902d0b012b53/4403121_33c8.jpeg?w=500&fm=webp",
        courseTitle: "Angular.js Development",
        summary: "Learn advanced concepts of Angular.js",
        duration: "10 hours",
        difficulty: "Advanced",
    },
    {
        courseImage: "https://img-b.udemycdn.com/course/750x422/5157066_66bb.jpg",
        courseTitle: "Intermediate Vue.js Development",
        summary: "Learn Intermediate Skills in Vue.js",
        duration: "5 hours",
        difficulty: "Intermediate",
    },
    {
        courseImage: "https://codewithmosh.com/_next/image?url=https%3A%2F%2Fcdn.filestackcontent.com%2F8MbtJ4hTAaOk3KPcptqZ&w=3840&q=75",
        courseTitle: "Introduction to Next.js",
        summary: "Learn Beginner Level Skills in Next.js",
        duration: "2 hours",
        difficulty: "Beginner",
    },
    {
        courseImage: "https://images.ctfassets.net/aq13lwl6616q/4wW7nnU5Nuuf9DHIIcO4Zo/7838e981e306b0148c4f902d0b012b53/4403121_33c8.jpeg?w=500&fm=webp",
        courseTitle: "Introduction to Angular.js",
        summary: "Learn Beginner Level Skills in Angular.js",
        duration: "3 hours",
        difficulty: "Beginner",
    },
]

const BrowseCourses = () => {
    return (
        allCourses.map(({courseImage, courseTitle, summary, duration, difficulty}) => <div><Course courseImage={courseImage} courseTitle={courseTitle} summary={summary} duration={duration} difficulty={difficulty}/></div>)
    );
}

export default BrowseCourses;