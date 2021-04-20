import React, { Component } from 'react';

import { oAuthClient_Id } from '../config.json';
import { googleLogin } from '../services/authService';
import GoogleLogin from 'react-google-login';
import Icon from '../assets/Icons';
import defaultStyles from '../config/styles';
import './signInWithGoogle.css';

class SignInWithGoogle extends Component {
    
    render() { 
        const responseGoogle = async (response) => {
            try {
                const { data: jwt } = await googleLogin({
                    fullName: response.profileObj.name,
                    username: response.profileObj.googleId,
                    password: response.profileObj.googleId
                });
                localStorage.setItem('token', jwt);
                this.props.history.push('/dashboard');
            } catch (ex) {}
        }

        return (
            <GoogleLogin
                clientId={oAuthClient_Id}
                render={renderProps => (
                    <div onClick={renderProps.onClick} disabled={renderProps.disabled} className="btn" style={{
                        display: 'flex',
                        flexDirection: 'row',
                        marginTop: 20,
                        marginBottom: 20,
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: `1px 3px 1px ${defaultStyles.colors.light}`,
                        padding: 15,
                        width: 210,
                        borderRadius: 15,
                        marginLeft: '20%',
                        textDecoration: 'none'
                    }}>
                        <Icon name="Google" size={20}/>
                        <div style={{ marginLeft: 20, color: defaultStyles.colors.dark }}>Sign in with Google</div>
                    </div>
                )}
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
        );
    }
}
 
export default SignInWithGoogle;