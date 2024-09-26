import { useState, useEffect } from 'react';

import countriesServices from './services/countries';

import Country from './components/country';

function App() {

  const [countries, setCountries] = useState([]);
  const [found, setFound] = useState([]);
  const [wanted, setWanted] = useState(null);

  useEffect(() => {
    countriesServices.getNames()
      .then(data =>
        setCountries(data)
      );
  }, []);

  const searchHHandler = (event) => {
    const matches = countries.filter((element) =>
      element.toLowerCase().includes(event.target.value.toLowerCase())
    )
    matches.length === 1 ? 
    countriesServices.getCountry(matches[0]).then(
      data => setWanted(data)
    )
    : setFound(matches);
  }

  return (
    <>
      <div>
        find countries <input type="text" onChange={searchHHandler} />
      </div>

      <div>
        {
          found.length > 10 && "Too many matches, specify another filter"
        }
        {
          found.length > 1 && found.length < 10
          && <ul>
            {found.map(element => <li key={element}>{element}</li>)}
          </ul>
        }
        {
          wanted
          && <Country country={wanted} />
        }
      </div>
    </>
  )
}

export default App
