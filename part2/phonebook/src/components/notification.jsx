const Notification = ({ notification }) => {

    if(!notification.content) return null;

    return (
        <div className={notification.isError ? "error" : "message"} >
            {
                notification.content
            }
        </div>
    )
}
export default Notification