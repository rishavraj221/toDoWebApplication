import React, { Component } from 'react';

import defaultStyles from '../../config/styles';

class AllTasks extends Component {
    render() { 
        const { color=defaultStyles.colors.medium, size="40.556" } = this.props;

        return ( 
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 40.556 40.556">
                <g id="iconfinder_ic_keyboard_arrow_down_48px_352466" transform="translate(0 0.75)">
                    <path id="Path_2" data-name="Path 2" d="M14.391,16.42l7.748,7.748,7.748-7.748,2.391,2.391L22.139,28.95,12,18.811Z" transform="translate(-1.861 -2.663)" fill={color}/>
                    <path id="Path_3" data-name="Path 3" d="M0-.75H40.556V39.806H0Z" fill="none"/>
                </g>
            </svg>
        );
    }
}
 
export default AllTasks;