const Filter = ({ searchHandler }) => {

    return (
        <div>
            filter shown with <input type="text" onChange={searchHandler} />
        </div>
    )
}
export default Filter