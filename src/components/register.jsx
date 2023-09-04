import { useState } from 'react';
import { Link } from 'react-router-dom'
function Register() {
    const [state, setState] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        image: '',
    }) ;
    const [loadImage, setLoadImage] = useState('');

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
        e.preventDefault();
        console.log(state)
    }
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
                            <input type="text" onChange={handleInput} name="username" id="username" className="form-control" placeholder="Username"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" onChange={handleInput} name="email" id="email" className="form-control" placeholder="Email"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" onChange={handleInput} name="password" id="password" className="form-control" placeholder="password"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input type="password" onChange={handleInput} name="confirmPassword" id="confirmPassword" className="form-control" placeholder="Confirm Password"/>
                        </div>


                        <div className="form-group">
                            <div className="file-image">
                                <div className="image">
                                    { loadImage ? <img src={loadImage} /> : ''}
                                </div>
                                <div className="file">
                                    <label htmlFor="image">Select Image</label>
                                    <input type="file" onChange={handleImage} name="image" id="image" className="form-control" />
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