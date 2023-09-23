function Friends(props) {
    const {friend} = props
    return ( 
        <div className="friend">
            <div className="friend-image">
                <div className="image">
                    <img src={`./image/${friend.image}`} alt="" />
                </div>
                <div className="friend-name-seen">
                    <div className="friend-name"> 
                        <h4> {friend.username} </h4>
                     </div> 
                </div>
            </div>
        </div>
     );
}

export default Friends;