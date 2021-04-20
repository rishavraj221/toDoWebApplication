import React, { Component } from 'react';

import defaultStyles from '../../config/styles';

class AllTasks extends Component {
    render() { 
        const { color=defaultStyles.colors.primary, size="31.671" } = this.props;

        return ( 
            <svg xmlns="http://www.w3.org/2000/svg" width={1.15004263 * size} height={size} viewBox="0 0 36.423 31.671">
                <g id="iconfinder_Comments_1737374" transform="translate(-60.822 -86.288)">
                    <path id="Path_27" data-name="Path 27" d="M163.446,152.119h14.472a.724.724,0,1,0,0-1.448H163.446a.724.724,0,0,0,0,1.448Z" transform="translate(-92.392 -58.376)" fill={color}/>
                    <path id="Path_28" data-name="Path 28" d="M209.267,203.362H195.7a.724.724,0,0,0,0,1.448h13.562a.724.724,0,0,0,0-1.448Z" transform="translate(-121.641 -106.15)" fill={color}/>
                    <path id="Path_29" data-name="Path 29" d="M176.156,256.052h-12.71a.724.724,0,0,0,0,1.447h12.71a.724.724,0,0,0,0-1.447Z" transform="translate(-92.392 -153.924)" fill={color}/>
                    <path id="Path_30" data-name="Path 30" d="M92.169,86.288H65.9a4.9,4.9,0,0,0-5.076,4.694v14.447a4.9,4.9,0,0,0,5.076,4.693H81.39l11.179,7.837v-7.85a4.868,4.868,0,0,0,4.675-4.679V90.982A4.9,4.9,0,0,0,92.169,86.288Zm2.9,19.141a2.737,2.737,0,0,1-2.9,2.522H90.4v5.834l-8.322-5.834H65.9a2.737,2.737,0,0,1-2.9-2.522V90.982a2.737,2.737,0,0,1,2.9-2.523H92.169a2.737,2.737,0,0,1,2.9,2.523Z" fill={color}/>
                </g>
            </svg>
        );
    }
}
 
export default AllTasks;