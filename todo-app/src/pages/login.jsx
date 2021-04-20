import React from 'react';
import Joi from 'joi-browser';
import { Link } from 'react-router-dom';

import { login } from '../services/authService';
import Form from '../components/form';
import FormButton from '../components/FormButton';
import SignInWithGoogle from '../components/SignInWithGoogle';
import defaultStyles from '../config/styles';
import './login.css';

class Login extends Form {
    state = {  
        data: { username: '', password: '' },
        errors: {},
        loading: false
    }

    schema = {
        username: Joi.string().alphanum().min(3).max(30).required().label("Username"),
        password: Joi.string().min(8).max(30).required().label("Password"),
    }

    doSubmit = async () => {
        try {
            this.setState({ loading: true });
            const { data: jwt } = await login(this.state.data);
            localStorage.setItem('token', jwt);
            this.props.history.push('/dashboard');
        } catch (ex) {
            if (ex.response && ex.response.status === 400) {
                const errors = { ...this.state.errors };
                errors.username = ex.response.data;
                this.setState({ errors });
            }
        }
        this.setState({ loading: false });
    }

    render() {
        return ( 
            <div style={containerStyles} className="bar">
                <div style={headStyles}>Login</div>
                {this.state.loading && <div style={{ color: 'green', marginLeft: '40%' }}>Loading...</div>}
                <form onSubmit={this.handleSubmit} style={{ marginLeft: 60, justifyContent: 'center', flexDirection: 'column' }}>
                    {this.renderInput("username", formStyles, "UserName", "Username")}
                    {this.renderInput("password", formStyles, "Password", "Password", "password")}
                    <div style={{  marginLeft: '13%' }}>
                        <FormButton title="Login" />
                    </div>
                </form>
                <div style={{ display: 'flex', flexDirection: 'row', marginTop: 20, marginBottom: 20 }}>
                    <div style={{ marginLeft: '25%' }}>Don't have account,</div>
                    <Link to='/register' className="linkText" style={{ marginLeft: 5, color: defaultStyles.colors.primary, textDecoration: 'none' }}>Sign Up</Link>
                </div>
                <div style={{ marginLeft: '48%', color: defaultStyles.colors.dark }}>or</div>
                <SignInWithGoogle history={this.props.history} />
            </div>
        );
    }
}

const formStyles = {
    padding: 10,
    fontSize: 22,
    color: defaultStyles.colors.primary,
    marginLeft: 10,
    marginTop: 10,
    borderLeft: 0,
    borderRight: 0,
    borderTop: 0,
    borderBottomWidth: 1,
    borderBottomColor: defaultStyles.colors.primary
}
const headStyles = {
    marginTop: 30,
    marginBottom: 30,
    fontSize: 41,
    color: defaultStyles.colors.dark,
    marginLeft: 50
}
const containerStyles = {
    height: 530,
    width: 415,
    backgroundColor: defaultStyles.colors.white,
    borderRadius: 35,
}
 
export default Login;