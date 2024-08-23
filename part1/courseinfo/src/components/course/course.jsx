import Header from "../header/header"
import Content from "../content/content";
import Total from "../total/total";

const Course = ({ course }) => {

    const { name, parts } = course;

    return (
        <div>

            <Header course={name} />

            <Content parts={parts} />

            <Total parts={parts} />

        </div>
    )
}
export default Course