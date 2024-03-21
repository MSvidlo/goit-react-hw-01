
const FriendListItem = ({ name, isOnline, avatar }) => {
    return (<div>
        <img src={avatar} alt="Avatar" width="48" />
        <p>{name}</p>
        <p>{isOnline} status</p>
    </div>)
};
export default FriendListItem;