import React from 'react';

import Icon from '../assets/Icons';
import defaultStyles from '../config/styles';
import './button.css';

const Button = ({ title, icon, iconSize=20, width, onClick }) => {
    return (  
        <div onClick={onClick} style={{
                backgroundColor: defaultStyles.colors.primary,
                color: defaultStyles.colors.white,
                width: width,
                padding: 12,
                boxShadow: "0px 3px 6px #9e9e9e",
                borderRadius: 15,
                margin: 20,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 20
            }} className="button">
            {icon 
            ? <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <Icon name={icon} size={iconSize} color={defaultStyles.colors.white} />
                <div style={{ marginLeft: 10, fontSize: 20 }}>{title}</div>
            </div>
            : title}
        </div>
    );
}

export default Button;