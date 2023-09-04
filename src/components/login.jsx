import { Link } from 'react-router-dom'
import { useState } from 'react';
function Login() {
    const [state, setState] = useState({
        email: '',
        password: '',
    }) ;

    const handleInput = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmitForm = e => {
        e.preventDefault();
        console.log(state)
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
                            <input type="email" onChange={handleInput} name="email" id="email" className="form-control" placeholder="Email"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" onChange={handleInput} name="password" id="password" className="form-control" placeholder="password"/>
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