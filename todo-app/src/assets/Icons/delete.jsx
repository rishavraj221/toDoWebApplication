import React, { Component } from 'react';

import defaultStyles from '../../config/styles';

class AllTasks extends Component {
    render() { 
        const { color=defaultStyles.colors.danger, size="33.33" } = this.props;

        return ( 
            <svg id="iconfinder_cancel_close_delete_remove_reject_3994424" xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 33.33 33.33">
                <path id="Path_6" data-name="Path 6" d="M16.665,0A16.665,16.665,0,1,0,33.33,16.665,16.665,16.665,0,0,0,16.665,0Zm0,29.164a12.5,12.5,0,1,1,12.5-12.5,12.5,12.5,0,0,1-12.5,12.5Z" fill={color}/>
                <path id="Path_7" data-name="Path 7" d="M42.124,30.622a2.124,2.124,0,0,0-3,0l-2.747,2.747-2.747-2.747a2.124,2.124,0,1,0-3,3l2.747,2.747L30.623,39.12a2.124,2.124,0,1,0,3,3l2.747-2.747,2.747,2.747a2.124,2.124,0,1,0,3-3l-2.747-2.747,2.747-2.747A2.124,2.124,0,0,0,42.124,30.622Z" transform="translate(-19.708 -19.708)" fill={color}/>
            </svg>
        );
    }
}
 
export default AllTasks;