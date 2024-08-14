import StatisticsLine from "../statistics-line/statistics-line";

const Statistics = ({ good, neutral, bad }) => {

    const all = good + neutral + bad;
    const average = ((good - bad) / all) || 0;
    const positive = (good * 100 / all) || 0;

    return (
        <table>

            <tbody>
                <tr>
                    <StatisticsLine text={"good"} value={good} />
                </tr>
                <tr>
                    <StatisticsLine text={"neutral"} value={neutral} />
                </tr>
                <tr>
                    <StatisticsLine text={"bad"} value={bad} />
                </tr>
                <tr>
                    <StatisticsLine text={"all"} value={all} />
                </tr>
                <tr>
                    <StatisticsLine text={"average"} value={average} />
                </tr>
                <tr>
                    <StatisticsLine text={"positive %"} value={positive} />
                </tr>
            </tbody>

        </table>
    )
}
export default Statistics