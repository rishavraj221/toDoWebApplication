import React, { Component } from 'react';

import defaultStyles from '../../config/styles';

class AllTasks extends Component {
    render() { 
        const { color=defaultStyles.colors.primary, size="28.907" } = this.props;

        return ( 
            <svg xmlns="http://www.w3.org/2000/svg" width={0.83325838 * size} height={size} viewBox="0 0 24.087 28.907">
                <g id="icons" transform="translate(-2 0.002)">
                    <path id="password" d="M23.678,12.044H9.226V8.672a4.978,4.978,0,0,1,4.336-5.058,4.88,4.88,0,0,1,5.3,4.817h0a1.138,1.138,0,0,0,1.2,1.2h1.2a1.138,1.138,0,0,0,1.2-1.2h0A8.407,8.407,0,0,0,14.284,0a8.508,8.508,0,0,0-8.671,8.43v3.613h-1.2A2.416,2.416,0,0,0,2,14.453v8.43A5.963,5.963,0,0,0,8.022,28.9H20.065a5.963,5.963,0,0,0,6.022-6.022v-8.43A2.416,2.416,0,0,0,23.678,12.044Zm-8.43,9.274v1.566a1.3,1.3,0,0,1-1.2,1.2,1.3,1.3,0,0,1-1.2-1.2V21.317a2.331,2.331,0,0,1-1.2-2.047,2.409,2.409,0,0,1,4.817,0A2.331,2.331,0,0,1,15.248,21.317Z" transform="translate(0 0)" fill={color}/>
                </g>
            </svg>
        );
    }
}
 
export default AllTasks;