import React, { Component } from 'react';

import defaultStyles from '../../config/styles';

class AllTasks extends Component {
    render() { 
        const { color=defaultStyles.colors.primary, size="27.9" } = this.props;

        return ( 
            <svg xmlns="http://www.w3.org/2000/svg" width={0.86781362 * size} height={size} viewBox="0 0 24.212 27.9">
                <g id="iconfinder__user_account_profile_head_person_avatar_4213460" transform="translate(-18.7 -15)">
                    <path id="Path_8" data-name="Path 8" d="M30,24.086A9.086,9.086,0,1,0,39.086,15,9.113,9.113,0,0,0,30,24.086Zm16.034,0a6.948,6.948,0,1,1-6.948-6.948A6.969,6.969,0,0,1,46.034,24.086Z" transform="translate(-8.28)" fill={color}/>
                    <path id="Path_9" data-name="Path 9" d="M20.223,101.521a14.968,14.968,0,0,1,21.165,0L42.912,100A17.162,17.162,0,0,0,18.7,100Z" transform="translate(0 -58.621)" fill={color}/>
                </g>
            </svg>
        );
    }
}
 
export default AllTasks;