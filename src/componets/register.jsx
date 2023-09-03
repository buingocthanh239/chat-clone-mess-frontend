import { useState } from 'react';
import { Link } from 'react-router-dom'
function Register() {
    const [loadImage, setLoadImage] = useState('')
    return ( 
        <div className="register">
            <div className="card">
                <div className="card-header">
                    <h3>Register</h3>
                </div>

                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" id="username" className="form-control" placeholder="Username"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" className="form-control" placeholder="Email"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" className="form-control" placeholder="password"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input type="password" name="confirmPassword" id="confirmPassword" className="form-control" placeholder="Confirm Password"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input type="password" name="confirmPassword" id="confirmPassword" className="form-control" placeholder="Confirm Password"/>
                        </div>

                        <div className="form-group">
                            <div className="file-image">
                                <div className="image">
                                    { loadImage ? <img src={loadImage} /> : ''}
                                </div>
                                <div className="file">
                                    <label htmlFor="image">Select Image</label>
                                    <input type="file" name="image" id="image" className="form-control" />
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