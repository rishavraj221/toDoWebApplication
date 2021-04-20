import React, { Component } from 'react';

import defaultStyles from '../../config/styles';

class AllTasks extends Component {
    render() { 
        const { color=defaultStyles.colors.medium, size="7" } = this.props;

        return ( 
            <svg xmlns="http://www.w3.org/2000/svg" width={3.85714286 * size} height={size} viewBox="0 0 27 7">
                <g id="Group_12" data-name="Group 12" transform="translate(-1409 -327)">
                    <g id="Ellipse_3" data-name="Ellipse 3" transform="translate(1409 327)" fill={color} stroke={color} stroke-width="1">
                        <circle cx="3.5" cy="3.5" r="3.5" stroke="none"/>
                        <circle cx="3.5" cy="3.5" r="3" fill="none"/>
                    </g>
                    <g id="Ellipse_4" data-name="Ellipse 4" transform="translate(1419 327)" fill={color} stroke={color} stroke-width="1">
                        <circle cx="3.5" cy="3.5" r="3.5" stroke="none"/>
                        <circle cx="3.5" cy="3.5" r="3" fill="none"/>
                    </g>
                    <g id="Ellipse_5" data-name="Ellipse 5" transform="translate(1429 327)" fill={color} stroke={color} stroke-width="1">
                        <circle cx="3.5" cy="3.5" r="3.5" stroke="none"/>
                        <circle cx="3.5" cy="3.5" r="3" fill="none"/>
                    </g>
                </g>
            </svg>
        );
    }
}
 
export default AllTasks;