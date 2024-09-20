const Person = ({ person, removeHandler }) => {

    return (
        <div>

            <li >{`${person.name} ${person.number}`}</li>

            <button onClick={() => {
                confirm(`Do you want delete ${person.name}`)
                    && removeHandler(person.id)
                }}
            >
            Delete
            </button>

        </div>
    )
}
export default Person