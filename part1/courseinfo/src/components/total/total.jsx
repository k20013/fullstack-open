const Total = ({ parts }) => {

    const total = parts.map((p) => p.exercises).reduce((a, c) => a + c, 0);
    // console.log(total)

    return (
        <p>
            Number of exercises {total}
        </p>
    )
}
// a = "acumulator" | c = "current value"
export default Total