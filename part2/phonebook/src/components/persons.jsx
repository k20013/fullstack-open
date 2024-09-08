const Persons = ({ persons, found }) => {

    const renderPerson = (p) => <li key={p.name}>{`${p.name} ${p.number}`}</li>;


    return (
        <ul>
            {
                found.length ?
                    found.map(renderPerson)
                    : persons.map(renderPerson)
            }
        </ul>
    )
}
export default Persons