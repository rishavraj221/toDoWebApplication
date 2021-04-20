import React, { Component } from 'react';

import defaultStyles from '../../config/styles';

class AllTasks extends Component {
    render() { 
        const { color=defaultStyles.colors.medium, size="35" } = this.props;

        return ( 
            <svg id="iconfinder_ic_mode_edit_48px_352547" xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 33.333 33.333">
                <path id="Path_4" data-name="Path 4" d="M6,27.477v5.652h5.652L28.327,16.453,22.676,10.8,6,27.477ZM32.683,12.1a1.51,1.51,0,0,0,0-2.133L29.164,6.446a1.51,1.51,0,0,0-2.133,0L24.273,9.2l5.652,5.652L32.683,12.1Z" transform="translate(-1.833 -1.835)" fill={color}/>
                <path id="Path_5" data-name="Path 5" d="M0,0H33.333V33.333H0Z" fill="none"/>
            </svg>
        );
    }
}
 
export default AllTasks;