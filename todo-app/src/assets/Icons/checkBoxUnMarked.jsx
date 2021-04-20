import React, { Component } from 'react';

import defaultStyles from '../../config/styles';

class AllTasks extends Component {
    render() { 
        const { color=defaultStyles.colors.medium, size="37" } = this.props;

        return ( 
            <svg xmlns="http://www.w3.org/2000/svg" width={1.13513514 * size} height={size} viewBox="0 0 42 37">
                <g id="Rectangle_2" data-name="Rectangle 2" fill={defaultStyles.colors.white} stroke={color} stroke-width="1">
                    <rect width="42" height={size} rx="7" stroke="none"/>
                    <rect x="0.5" y="0.5" width="41" height="36" rx="6.5" fill="none"/>
                </g>
            </svg>
        );
    }
}
 
export default AllTasks;