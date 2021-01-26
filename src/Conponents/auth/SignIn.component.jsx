import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signIn } from '../../Redux/actions/authActions';

const SignIn = ({ auth, authError, signIn }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = (e) => {
        e.target.id === 'email' ? (
            setEmail(e.target.value)
        ) : (
            setPassword(e.target.value)
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(email, password);
        signIn({email, password});
        setEmail('');
        setPassword('');
    }

    return (

        auth.uid ? (
            <Redirect to='/'/>
        ) : (
            <div className="container">
                <form className="white" onSubmit={handleSubmit}>
                    <h5 className="grey-text text-darken-3">Sign In</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" value={email} onChange={handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" value={password} onChange={handleChange}/>
                    </div>
                        <div className="input-field">
                            <button className="btn pink lighten-1 z-depth-0">Login</button>
                            <div className="red-text center">
                                {
                                    authError ? (<p>{authError}</p>)  : null
                                }
                            </div>
                        </div>
                </form>
            </div>
        )

    );
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (credentials) => dispatch(signIn(credentials))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
