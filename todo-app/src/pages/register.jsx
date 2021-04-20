import React from 'react';
import Joi from 'joi-browser';
import { Element } from 'react-scroll';
import { Link } from 'react-router-dom';

import { register } from '../services/userService';
import config from '../config.json';
import Form from '../components/form';
import FormButton from '../components/FormButton';
import defaultStyles from '../config/styles';
import './login.css';

const apiEndPoint = config.apiEndPoint + '/register';

class Register extends Form {
    state = {  
        data: { fullName: '', username: '', password: '', confirmPassword: '' },
        errors: {},
        loading: false
    }

    schema = {
        fullName: Joi.string().min(3).max(30).required().label("Full name"),
        username: Joi.string().alphanum().min(3).max(30).required().label("Username"),
        password: Joi.string().min(8).max(30).required().label("Password"),
        confirmPassword: Joi.any().valid(Joi.ref('password')).required().options({ language: { any: { allowOnly: 'must match password' } } }),
    }

    doSubmit = async () => {
        const { fullName, username, password } = this.state.data;
        const user = {
            fullName: fullName,
            username: username,
            password: password
        };
        try {
            this.setState({ loading: true });
            const response = await register(user);
            localStorage.setItem('token', response.headers['x-auth-token']);
            this.props.history.push('/dashboard');
        } catch (ex) {
            if (ex.response && ex.response.status === 400 ) {
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
                <div style={headStyles}>Register</div>
                <Element name="test7" className="element" id="containerElement" style={{
                    position: 'relative',
                    height: 430,
                    margin: 10,
                    overflow: 'scroll',
                }}>
                    {this.state.loading && <div style={{ color: 'green', marginLeft: '40%' }}>Registering...</div>}
                    <form onSubmit={this.handleSubmit} style={{ marginLeft: 50, justifyContent: 'center', flexDirection: 'column' }}>
                        {this.renderInput("fullName", formStyles, "FullName", "Full name")}
                        {this.renderInput("username", formStyles, "UserName", "Username")}
                        {this.renderInput("password", formStyles, "Password", "Password", "password")}
                        {this.renderInput("confirmPassword", formStyles, "Password", "Confirm Password", "password")}
                        <div style={{  marginLeft: '13%' }}>
                            <FormButton title="Register" />
                        </div>
                    </form>
                    <div style={{ display: 'flex', flexDirection: 'row', marginTop: 20, marginBottom: 20 }}>
                        <div style={{ marginLeft: '20%' }}>Already have an account,</div>
                        <Link to='/login' className="linkText" style={{ marginLeft: 5, color: defaultStyles.colors.primary, textDecoration: 'none' }}>Login</Link>
                    </div>
                </Element>
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
    borderBottomColor: defaultStyles.colors.primary,
}
const headStyles = {
    marginTop: 30,
    marginBottom: 10,
    fontSize: 41,
    color: defaultStyles.colors.dark,
    marginLeft: 50
}
const containerStyles = {
    height: 500,
    width: 415,
    backgroundColor: defaultStyles.colors.white,
    borderRadius: 35,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
}
 
export default Register;