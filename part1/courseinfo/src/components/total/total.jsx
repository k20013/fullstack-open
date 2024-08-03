const Total = ({ excercises }) => {

    return (
        <p>Number of exercises {excercises.reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            0,
        )}</p>
    )
}
export default Total