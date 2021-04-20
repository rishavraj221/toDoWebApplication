import React, { Component } from 'react';

import defaultStyles from '../../config/styles';

class AllTasks extends Component {
    render() { 
        const { color=defaultStyles.colors.medium, size="47" } = this.props;

        return ( 
            <svg xmlns="http://www.w3.org/2000/svg" width={0.531914894 * size} height={size} viewBox="0 0 25 47">
                <text id="X" transform="translate(0 38)" fill={color} font-size="40" font-family="HelveticaNeue, Helvetica Neue"><tspan x="0" y="0">X</tspan></text>
            </svg>
        );
    }
}
 
export default AllTasks;