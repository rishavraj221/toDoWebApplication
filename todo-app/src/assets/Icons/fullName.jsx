import React, { Component } from 'react';

import defaultStyles from '../../config/styles';

class AllTasks extends Component {
    render() { 
        const { color=defaultStyles.colors.primary, size="31" } = this.props;

        return ( 
            <svg id="iconfinder_Artboard_7_3775353" xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 31 31">
                <rect id="Rectangle_7" data-name="Rectangle 7" width="29" height="29" rx="10" transform="translate(1 1)" fill="none" stroke={color} stroke-miterlimit="10" stroke-width="2"/>
                <circle id="Ellipse_6" data-name="Ellipse 6" cx="3" cy="3" r="3" transform="translate(13 5)" fill="none" stroke={color} stroke-miterlimit="10" stroke-width="2"/>
                <path id="Path_21" data-name="Path 21" d="M19.318,35.347,14.251,23.07h11.4Z" transform="translate(-3.935 -7.761)" fill="none" stroke={color} stroke-miterlimit="10" stroke-width="2"/>
            </svg>
        );
    }
}
 
export default AllTasks;