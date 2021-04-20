import React from 'react';

import defaultStyles from '../config/styles';
import './formButton.css';

const FormButton = ({ title, disabled }) => {
    return (  
        <button disabled={disabled} className="btn" style={{
            backgroundColor: disabled ? defaultStyles.colors.light : defaultStyles.colors.primary,
            color: defaultStyles.colors.white,
            width: 150,
            padding: 12,
            boxShadow: `0px 3px 6px ${defaultStyles.colors.light}`,
            borderRadius: 15,
            margin: 20,
            marginTop: 20,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 20,
            borderColor: defaultStyles.colors.white
        }}>
            {title}
        </button>
    );
}
 
export default FormButton;