import React from 'react';

import Icon from '../assets/Icons';
import defaultStyles from '../config/styles';

const FormInput = ({ iconName, name, style, error, ...rest }) => {
    return (
        <React.Fragment>
            <div>
                <Icon name={iconName} size={20} />
                <input name={name} style={style} id={name} {...rest} />
            </div>
            {error && <div style={{ color: defaultStyles.colors.danger, width: 250, marginLeft: 30 }}>{error}</div>}
        </React.Fragment>  
    );
}
 
export default FormInput;