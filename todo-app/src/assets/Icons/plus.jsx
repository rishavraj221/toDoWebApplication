import React, { Component } from 'react';

import defaultStyles from '../../config/styles';

class AllTasks extends Component {
    render() { 
        const { color=defaultStyles.colors.primary, size="28" } = this.props;

        return ( 
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 28 28">
                <path id="iconfinder_add_134224" d="M28,14H18V4a2,2,0,0,0-4,0V14H4a2,2,0,0,0,0,4H14V28a2,2,0,0,0,4,0V18H28a2,2,0,0,0,0-4Z" transform="translate(-2 -2)" fill={color}/>
            </svg>
        );
    }
}
 
export default AllTasks;