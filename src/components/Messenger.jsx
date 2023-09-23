import { FaEllipsisH,FaEdit,FaSistrix,FaSignOutAlt } from "react-icons/fa";
import RightSide from "./RightSide";
import Friends from "./Friends";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { getFriends } from '../store/actions/messengerAction'
import { CLEAR_ERROR_MESSAGE } from "../store/types/messengerType";
import { toast } from "react-toastify";
function Messenger() {
    const [currFriend, setCurrFriend] = useState('')
    const { myInfo } = useSelector(state => state.auth)
    const { friends, error } = useSelector(state => state.messenger)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getFriends())
    }, []);

    useEffect(() => {
        if (error) {
            error.map(err => toast.error(err));
            dispatch({type: CLEAR_ERROR_MESSAGE})
        }
    }, [error])

    const handleSelectCurrFriend = (friend) => {
        setCurrFriend(friend)
    }
    return ( 
        <div className="messenger">
            <div className="row">
                <div className="col-3">
                    <div className="left-side">
                        <div className="top">
                            <div className="image-name">
                                <div className="image">
                                    <img src={`./image/${myInfo.image}`} alt="" />
                                </div>
                                <div className="name">
                                    <h3> {myInfo.username} </h3>
                                </div>
                            </div>

                            <div className="icons">
                                <div className="icon">
                                    <FaEllipsisH />
                                </div>
                                <div className="icon">
                                    <FaEdit />
                                </div>

                            </div>
                        </div>

                        <div className="friend-search">
                            <div className="search">
                                <button> <FaSistrix /> </button>
                                <input type="text" placeholder="search" className="form-control"/>
                            </div>
                        </div>

                        <div className="friends">
                            { friends.map((friend,index) => (
                                <div className="hover-friend" onClick={() => handleSelectCurrFriend(friend)}  key={index}>
                                    <Friends friend={friend}/>
                                </div>
                            ))}
                        </div>
                    </div>
                </div> 

                { currFriend ? (<RightSide friendInfo={currFriend}/>) : 'Hãy bắt đầu một cuộc hội thoại'}
            </div> 
        </div>
    );
}

export default Messenger;