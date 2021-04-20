import React, { Component } from 'react';

import defaultStyles from '../../config/styles';

class AllTasks extends Component {
    render() { 
        const { color=defaultStyles.colors.medium, size="32" } = this.props;

        return ( 
            <svg id="Sign_Out" xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 32 32">
                <path id="Path_31" data-name="Path 31" d="M15,30H2V2H15a1,1,0,0,0,0-2H1A1,1,0,0,0,0,1V31a1,1,0,0,0,1,1H15a1,1,0,0,0,0-2Z" fill={color}/>
                <path id="Path_32" data-name="Path 32" d="M31.71,15.3l-6.9-7a.993.993,0,0,0-1.414,0,1.016,1.016,0,0,0,0,1.428l5.2,5.275H8a1.01,1.01,0,0,0,0,2.02H28.6L23.4,22.3a1.016,1.016,0,0,0,0,1.428.992.992,0,0,0,1.414,0l6.9-7A1.022,1.022,0,0,0,31.71,15.3Z" fill={color}/>
            </svg>
        );
    }
}
 
export default AllTasks;