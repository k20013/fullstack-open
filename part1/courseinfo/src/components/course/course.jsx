import Header from "../header/header"
import Content from "../content/content";

const Course = ({ course }) => {

    const { name, parts } = course;

    return (
        <div>

            <Header course={name} />

            <Content parts={parts} />

        </div>
    )
}
export default Course