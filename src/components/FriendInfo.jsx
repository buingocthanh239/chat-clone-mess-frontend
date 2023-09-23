import { FaCaretSquareDown} from "react-icons/fa";
function FriendInfo(props) {
    const {friendInfo} = props
    return ( 
            <div className="friend-info">
                <input type="checkbox" id="gallery"/>
                <div className="image-name">
                    <div className="image">
                        <img src={`./image/${friendInfo.image}`} alt="" />
                    </div>
                    <div className="name">
                        <h4> {friendInfo.username} </h4>
                    </div>
                </div>
                <div className="others" >
                    <div className="custom-chat">
                        <h3> Custom chat</h3>
                        <FaCaretSquareDown/>
                    </div>

                    <div className="privacy">
                        <h3> Privacy and Suport </h3>
                    </div>

                    <div className="media">
                        <h3>Share Media</h3>
                        <label htmlFor='gallery'> <FaCaretSquareDown/> </label> 
                    </div>
                </div>

                <div className="gallery">
                    <img src="" alt="" />
                </div>
            </div>
     );
}

export default FriendInfo;