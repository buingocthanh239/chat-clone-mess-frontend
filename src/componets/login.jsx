import { Link } from 'react-router-dom'
function Login() {
    return ( 
        <div className="register">
            <div className="card">
                <div className="card-header">
                    <h3>Login</h3>
                </div>

                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" className="form-control" placeholder="Email"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" className="form-control" placeholder="password"/>
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