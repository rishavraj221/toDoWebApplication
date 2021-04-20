import React from 'react';
import { Link } from 'react-router-dom';

import Illustration from '../assets/Illustrations';
import Button from '../components/Button';
import defaultStyles from '../config/styles';

const Home = (props) => {

    return (  
        <div style={{
            height: 720,
            width: 1000,
            backgroundColor: defaultStyles.colors.white,
            borderRadius: 35,
        }} className="bar">
            <div style={{ display: 'flex', flexDirection: 'row', margin: 40, marginLeft: 50 }}>
                <div style={{
                    fontSize: 41,
                    color: defaultStyles.colors.dark,
                }}>Dashboard</div>
                <div style={{ marginLeft: '58%', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <Link to="/login" style={{ fontSize: 15, textDecoration: 'none', color: defaultStyles.colors.dark }}>Login</Link>
                    <Link to="/register" style={{ fontSize: 15, textDecoration: 'none', color: defaultStyles.colors.dark, fontSize: 15, marginLeft: 70 }}>SignUp</Link>
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Illustration name="SignIn" height='65%' width='65%' />
                <div style={{ marginTop: 25, fontSize: 15, color: defaultStyles.colors.medium }}>Please login yourself to see your tasks</div>
                <Link to='/login' style={{ textDecoration: 'none' }}>
                    <Button title="Login" width={100} />
                </Link>
            </div>
        </div>
    );
}
 
export default Home;