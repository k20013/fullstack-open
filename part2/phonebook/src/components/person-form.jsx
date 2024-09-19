const Form = ({ submitHandler, nameHandler, numberHandler }) => {

    return (
        <form onSubmit={submitHandler}>
            <div>
                name: <input type="text" onChange={nameHandler} />
            </div>
            <div>
                number: <input type="text" onChange={numberHandler} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}
export default Form;