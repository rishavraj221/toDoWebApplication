import React from 'react';

import Plus from './plus';
import DropDown from './dropDown';
import LogOut from './logOut';
import Menu from './menu';
import Edit from './edit';
import Comment from './comment';
import List from './list';
import Delete from './delete';
import UserName from './username';
import Password from './password';
import Google from './google';
import FullName from './fullName';
import Cancel from './cancel';
import CheckBoxMarked from './checkBoxMarked';
import CheckBoxUnMarked from './checkBoxUnMarked';

function Icon({ name, color, size }) {
  if (name === 'Plus') return <Plus color={color} size={size}/>;
  if (name === 'DropDown') return <DropDown color={color} size={size}/>;
  if (name === 'LogOut') return <LogOut color={color} size={size}/>;
  if (name === 'Menu') return <Menu color={color} size={size}/>;
  if (name === 'Edit') return <Edit color={color} size={size}/>;
  if (name === 'Comment') return <Comment color={color} size={size}/>;
  if (name === 'List') return <List color={color} size={size}/>;
  if (name === 'Delete') return <Delete color={color} size={size}/>;
  if (name === 'UserName') return <UserName color={color} size={size}/>;
  if (name === 'Password') return <Password color={color} size={size}/>;
  if (name === 'Google') return <Google size={size} />;
  if (name === 'FullName') return <FullName color={color} size={size}/>;
  if (name === 'Cancel') return <Cancel color={color} size={size}/>;
  if (name === 'CheckBoxMarked') return <CheckBoxMarked color={color} size={size}/>;
  if (name === 'CheckBoxUnMarked') return <CheckBoxUnMarked color={color} size={size}/>;
  return;
}

export default Icon;