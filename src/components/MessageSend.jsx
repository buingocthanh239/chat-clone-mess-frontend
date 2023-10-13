import { useEffect, useState } from "react";
import { FaPlusCircle,FaFileImage,FaGift,FaPaperPlane } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux'
import { sendMessage } from "../store/actions/messengerAction";
import { SEND_MESSAGE_SUCCESS_CLEAR } from "../store/types/messengerType";
function MessageSend(props) {
    const [newMessage, setNewMessage] = useState('');
    const { sendMessageSuccess } = useSelector(store => store.messenger)
    const dispatch = useDispatch()
    const emojis = [
        '😀', '😃', '😄', '😁',
        '😆', '😅', '😂', '🤣',
        '😊', '😇', '🙂', '🙃',
        '😉', '😌', '😍', '😝',
        '😜', '🧐', '🤓', '😎',
        '😕', '🤑', '🥴', '😱'
    ]

    useEffect(() => {
        if (sendMessageSuccess) {
            dispatch({
                type: SEND_MESSAGE_SUCCESS_CLEAR
            })
        }
    }, [sendMessageSuccess])

    const handleChangeMessage = (e) => {
        setNewMessage(e.target.value)
    }

    const handleSendMessage = (e) => {
        dispatch(sendMessage({
            reseverId: props.friendId,
            message: newMessage
        })) 
        setNewMessage('')
    }
    return ( 
        <div className="message-send-section">
            <input type="checkbox" id="emoji" />
            <div className="file hover-attachment">
                <div className="add-attachment">
                    Add attachment
                </div>
                <FaPlusCircle />
            </div> 


            <div className="file hover-image">
                <div className="add-image">
                    Add Image
                </div>
                <input type="file" className="form-control" id ="pic" />
                <label htmlFor="pic"> <FaFileImage /> </label>
            </div> 

            <div className='file hover-gift'>
               <div className='add-gift'>
                    Add gift
               </div>
               <FaGift />
            </div>

            <div className="message-type">
                <input type="text" name='message' id="message" placeholder="Aa" value={newMessage} onChange={handleChangeMessage} className="form-control" />
                <div className='file hover-gift'>
                <label htmlFor='emoji'> ❤️ </label>
                </div>
            </div>

            <div className="file" onClick={handleSendMessage}>
                <FaPaperPlane/>
            </div>

            <div className="emoji-section"> 
                <div className="emoji">
                    {
                        emojis.map(emoji => <span>{ emoji }</span>)
                    }
                </div>
            </div>
        </div>
     );
}

export default MessageSend;