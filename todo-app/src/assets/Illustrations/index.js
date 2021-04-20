import React from 'react';

import AllTasks from "./allTasks";
import Pending from './pending';
import Completed from './completed';
import SignIn from './signin';

function Illustration({ name, color, height, width }) {
  if (name === 'AllTasks') return <AllTasks color={color} height={height} width={width}/>;
  if (name === 'Pending') return <Pending color={color} height={height} width={width}/>;
  if (name === 'Completed') return <Completed color={color} height={height} width={width}/>;
  if (name === 'SignIn') return <SignIn color={color} height={height} width={width}/>;
  return;
}

export default Illustration;