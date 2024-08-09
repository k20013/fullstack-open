const Statistics = ({ good, neutral, bad }) => {

    const all = good + neutral + bad;
    const average = ((good - bad) / all) || 0;
    const positive = (good * 100 / all) || 0;

    return (
        <div>

            <h2>Statistics</h2>

            <p>good {good}</p>
            <p>neutral {neutral}</p>
            <p>bad {bad}</p>
            <p>all {all}</p>
            <p>average {average} %</p>
            <p>positive {positive} %</p>

        </div>
    )
}
export default Statistics