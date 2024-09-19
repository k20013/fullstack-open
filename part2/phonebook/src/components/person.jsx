import personServices from '../services/persons';

const Person = ({ person }) => {

    return (
        <div>

            <li >{`${person.name} ${person.number}`}</li>

            <button onClick={() => {
                confirm(`Do you want delete ${person.name}`)
                    && personServices.remove(person.id)
                }}
            >
            Delete
            </button>

        </div>
    )
}
export default Person