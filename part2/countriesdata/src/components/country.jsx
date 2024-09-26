const Country = ({ country }) => {

    return (
        <div>
            <h1>{country.name.official}</h1>

            <p>{country.capital.join(" ")}</p>
            <p>{country.continents.join(" ")}</p>
            <p>area: {country.area}</p>
            <ul>
                {
                    Object.values(country.languages).map(
                        element => <li key={element}>{element}</li>
                    )
                }
            </ul>
            <img src={country.flags.png} alt={country.flags.alt} />
        </div>
    )
}
export default Country