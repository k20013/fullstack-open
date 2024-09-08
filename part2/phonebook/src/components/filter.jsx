const Filter = ({ setFound, persons }) => {

    const searchHandler = (e) => {
        const result = persons.filter((person) => person.name.toLowerCase().includes(e.target.value));
        setFound(result);
    }

    return (
        <div>
            filter shown with <input type="text" onChange={searchHandler} />
        </div>
    )
}
export default Filter