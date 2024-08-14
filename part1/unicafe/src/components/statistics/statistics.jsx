import StatisticsLine from "../statistics-line/statistics-line";

const Statistics = ({ good, neutral, bad }) => {

    const all = good + neutral + bad;
    const average = ((good - bad) / all) || 0;
    const positive = (good * 100 / all) || 0;

    return (
        <div>

            <StatisticsLine text={"good"} value={good} />
            <StatisticsLine text={"neutral"} value={neutral} />
            <StatisticsLine text={"bad"} value={bad} />
            <StatisticsLine text={"all"} value={all} />
            <StatisticsLine text={"average"} value={average} />
            <StatisticsLine text={"positive %"} value={positive} />

        </div>
    )
}
export default Statistics