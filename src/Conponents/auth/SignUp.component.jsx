import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signUp } from '../../Redux/actions/authActions';

const SignUp = ({ auth, authError, signUp }) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = (e) => {
        switch (e.target.id) {
            case 'firstname':
                setFirstName(e.target.value);
                break;
            case 'lastname':
                setLastName(e.target.value);
                break;
            case 'email':
                setEmail(e.target.value);
                break;
            case 'password':
                setPassword(e.target.value);
                break;
            default:
                break;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        signUp({ firstName, lastName, email, password });
        setFirstName('');
        setLastName('');
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
                        <label htmlFor="firstname">firstName</label>
                        <input type="text" name="firstname" id="firstname" value={firstName} onChange={handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastname">lastName</label>
                        <input type="text" name="lastname" id="lastname" value={lastName} onChange={handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" value={email} onChange={handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" value={password} onChange={handleChange}/>
                    </div>
                        <div className="input-field">
                            <button className="btn pink lighten-1 z-depth-0">Signup</button>
                            <div className="red-text center">
                                {authError ? (<p>{authError}</p>) : null}
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
        authError: state.auth.authError,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (creds) => dispatch(signUp(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
