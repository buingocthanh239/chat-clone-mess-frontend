import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import {  toast} from 'react-toastify'
import { userRegister } from '../store/actions/authAction';
import { useDispatch, useSelector} from 'react-redux';
import { ERROR_MESSAGE_CLEAR, SUCCESS_MESSAGE_CLEAR } from '../store/types/authType';

function Register() {
    const [state, setState] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        image: '',
    }) ;
    const [loadImage, setLoadImage] = useState('');

    const navigate = useNavigate();
    const {  authenticate, error, successMessage } = useSelector(state => state.auth)
    

    const dispatch = useDispatch();

    const handleInput = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const handleImage = e => {
        if (e.target.files.length > 0) {
            setState({
                ...state,
                [e.target.name]: e.target.files[0]
            })
        }
        const reader = new FileReader();
        reader.onload = () => {
            setLoadImage(reader.result)
        }
        reader.readAsDataURL(e.target.files[0]);
    }
    
    const handleSubmitForm = e => {
        const {username,email,password,confirmPassword, image} = state;
        e.preventDefault();

        const formData = new FormData();

        formData.append('username',username);
        formData.append('email',email);
        formData.append('password',password);
        formData.append('confirmPassword',confirmPassword);
        formData.append('image',image);
        dispatch(userRegister(formData))
    }

    useEffect(() => {
        if (authenticate) {
            navigate('/')
        }
        if (successMessage) {
            toast.success(successMessage);
            dispatch({type: SUCCESS_MESSAGE_CLEAR})
            navigate('/messenger/login')
        }
        if (error) {
            error.map(err => toast.error(err));
            dispatch({type: ERROR_MESSAGE_CLEAR})
        }

    }, [successMessage, error])
    return ( 
        <div className="register">
            <div className="card">
                <div className="card-header">
                    <h3>Register</h3>
                </div>

                <div className="card-body">
                    <form onSubmit={handleSubmitForm}> 
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" onChange={handleInput} value={state.username} name="username" id="username" className="form-control" placeholder="Username"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" onChange={handleInput} value={state.email} name="email" id="email" className="form-control" placeholder="Email"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" onChange={handleInput} value={state.password} name="password" id="password" className="form-control" placeholder="password"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input type="password" onChange={handleInput} value={state.confirmPassword} name="confirmPassword" id="confirmPassword" className="form-control" placeholder="Confirm Password"/>
                        </div>


                        <div className="form-group">
                            <div className="file-image">
                                <div className="image">
                                    { loadImage ? <img src={loadImage} /> : ''}
                                </div>
                                <div className="file">
                                    <label htmlFor="image">Select Image</label>
                                    <input type="file" onChange={handleImage}  name="image" id="image" className="form-control" />
                                </div>
                            </div>                         
                        </div>

                        <div className="form-group">
                            <input type="submit" value="register" className="btn" />
                        </div>

                        <div className="form-group">
                            <span> <Link to='/messenger/login'>Login your account</Link></span>
                        </div>
                    </form>
                </div>
            </div>
        </div> 
    );
}

export default Register;