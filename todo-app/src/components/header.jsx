import React from 'react';

import Icon from '../assets/Icons';
import defaultStyles from '../config/styles';
import './header.css';

const Header = ({ dropDownVisible, handleShowDropDown, handleLogOut, name }) => {

    return (
    <React.Fragment>
        <div style={{ display: 'flex', flexDirection: 'row', margin: 40, marginLeft: 50 }}>
            <div style={{
                fontSize: 41,
                color: defaultStyles.colors.dark,
            }}>Dashboard</div>
            <div
                onClick={handleShowDropDown}
                style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '62%' }}
                className="container button"
            >
                <div style={{ fontSize: 15 }}>{name}</div>
                <Icon name="DropDown" size="25" />
                {dropDownVisible && <div onClick={handleLogOut} className="dropdown" style={{ display: 'flex', flexDirection: 'row', padding: 10, borderRadius: 15, alignItems: 'center' }}>
                    <Icon name="LogOut" size="24"/>
                    <ul>
                        <li>Log Out</li>
                    </ul>
                </div>}
            </div>
        </div>
    </React.Fragment>
    );
}
 
export default Header;