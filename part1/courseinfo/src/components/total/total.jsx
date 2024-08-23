const Total = ({ parts }) => {

    const total = parts.map((p) => p.exercises);
    // console.log(total)

    return (
        <p>
            Number of exercises {total.reduce((a, c) => a + c, 0)}
        </p>
    )
}
// a = "acumulator" | c = "current value"
export default Total