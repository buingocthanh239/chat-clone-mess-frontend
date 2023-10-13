import { useEffect } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux'
import { getMessage } from '../store/actions/messengerAction'
import moment from 'moment'
function Message(props) {
    const dispatch = useDispatch();
    const { friendInfo } = props
    const {messages} = useSelector(store => store.messenger);
    const { myInfo } = useSelector(store => store.auth)
    useEffect(() => {
        dispatch(getMessage(friendInfo._id))
    },[])
   
    return ( 
        
        <div className="message-show">
                { 
                   messages && messages.length > 0 ? (
                    messages.map((message, index) => (
                        message.senderId === myInfo.id ? (
                        <div className="my-message">
                            <div className="image-message">
                                <div className="my-text">
                                    <p className="message-text">
                                        { message.message.text === '' ? <img src={`./image/${message.message.image}`} /> : message.message.text} 
                                    </p>
                                    {
                                        index === message.length -1 && message.senderId === myInfo.id ? 
                                            message.status === 'seen' ?  
                                                <img className='img' src={`./image/${friendInfo.image}`} alt='' /> : 
                                                message.status === 'delivared' ? 
                                                    <span> <FaRegCheckCircle /> </span> : <span> <FaRegCheckCircle /> </span> : ''
                                    }
                                </div>
                            </div>
                            <div className="time">
                                {moment(message.createdAt).startOf('mini').fromNow()}
                            </div>
                        </div>  
                    ) : (
                        <div className="fd-messagage">
                            <div className="image-message-time">
                                <img src={`./image/${friendInfo.image}`} alt='' />
                                <div className="message-time">
                                    <div className="fd-text">
                                        <p className="message-text">
                                            {message.message.text === '' ? <img src={`./image/${message.message.image}`} />  : message.message.text }
                                        </p>
                                    </div>
                                    <div className="time">
                                        {moment(message.createdAt).startOf('mini').fromNow()}
                                    </div>  
                                </div>
                            </div>   
                        </div>
                    )
                ))) : ( 
                        <div className='friend_connect'>
                            <img src={`./image/${friendInfo.image}`} alt='' />
                            <h3>{friendInfo.userName} Connect You </h3>
                            <span> {moment(friendInfo.createdAt).startOf('mini').fromNow() } </span>
                        </div>
                    )
                }
        </div>
     );
}

export default Message;