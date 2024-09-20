const Notification = ({ content }) => {

    if(!content) return null;

    return (
        <div className="message">
            {
                content
            }
        </div>
    )
}
export default Notification