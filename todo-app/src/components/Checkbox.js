import React from 'react';

import Icon from '../assets/Icons';
import './checkbox.css';

const CheckBox = ({ isCheck, onClick, style }) => {
    const name = isCheck ? "CheckBoxMarked" : "CheckBoxUnMarked";
    return <div className="box" style={style} onClick={onClick}><Icon name={name} /></div>
}
 
export default CheckBox;