import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { userLogin } from '../store/actions/authAction';
import { toast } from 'react-toastify';
import { SUCCESS_MESSAGE_CLEAR, ERROR_MESSAGE_CLEAR } from '../store/types/authType';
function Login() {
    const [state, setState] = useState({
        email: '',
        password: '',
    }) ;

    const navigate = useNavigate();
    const {  authenticate, error, successMessage } = useSelector(state => state.auth)
    

    const dispatch = useDispatch();

    useEffect(() => {
        if (authenticate) {
            navigate('/')
        }
        if (successMessage) {
            toast.success(successMessage);
            dispatch({type: SUCCESS_MESSAGE_CLEAR})
        }
        if (error) {
            error.map(err => toast.error(err));
            dispatch({type: ERROR_MESSAGE_CLEAR})
        }

    }, [successMessage, error])

    const handleInput = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmitForm = e => {
        e.preventDefault();
        dispatch(userLogin(state))
    }
    return ( 
        <div className="register">
            <div className="card">
                <div className="card-header">
                    <h3>Login</h3>
                </div>

                <div className="card-body">
                    <form onSubmit={handleSubmitForm}>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" onChange={handleInput} value={state.email} name="email" id="email" className="form-control" placeholder="Email"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" onChange={handleInput} value={state.password} name="password" id="password" className="form-control" placeholder="password"/>
                        </div>

                        

                        <div className="form-group">
                            <input type="submit" value="register" className="btn" />
                        </div>

                        <div className="form-group">
                            <span>You don't have account?  <Link to='/messenger/register'>Register</Link></span>
                        </div>
                    </form>
                </div>
            </div>

        </div> 
    );
}

export default Login;