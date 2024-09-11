import { deletePerson } from "../services";

const Persons = ({ persons, found }) => {

    const renderPerson = (p) => 
    <div key={p.id}>
        <li >{`${p.name} ${p.number}`}</li>
        <button onClick={() => confirm(`Do you want delete ${p.name}`) && deletePerson(p.id)}>Delete</button>
    </div>;


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