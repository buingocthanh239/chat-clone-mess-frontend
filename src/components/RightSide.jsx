import { FaPhoneAlt,FaVideo,FaRocketchat } from "react-icons/fa";
import Message from "./Message";
import MessageSend from "./MessageSend";
import FriendInfo from './FriendInfo'
function RightSide(props) {
    const {friendInfo} = props
    return (  
        <div className="col-9">
            <div className="right-side">
                <input type="checkbox" id="dot" />
                <div className="row">
                    <div className="col-8">
                        <div className="message-send-show" >
                            <div className="header" >
                                <div className="image-name">
                                    <div className="image">
                                        <img src={`./image/${friendInfo.image}`} alt="" />
                                    </div>
                                    <div className="name">{friendInfo.username}</div>
                                </div>

                                <div className="icons">
                                    <div className="icon">
                                        <FaPhoneAlt/>
                                    </div>
                                    <div className="icon">
                                        <FaVideo/>
                                    </div>
                                    <div className="icon">
                                    <label htmlFor='dot'> <FaRocketchat/> </label> 
                                    </div>
                                </div>
                            </div>

                            <Message friendInfo={friendInfo}/>
                            <MessageSend friendId={friendInfo._id}/>
                        </div>
                    </div>
                    <div className="col-4" >
                        <FriendInfo friendInfo={friendInfo} />
                    </div>

                </div> 
            </div>
        </div>
    );
}

export default RightSide;