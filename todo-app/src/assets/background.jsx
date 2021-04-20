import React, { Component } from 'react';

import defaultStyles from '../config/styles';

class AllTasks extends Component {
    render() { 
        const {
            color=defaultStyles.colors.primary,
            secondaryColor=defaultStyles.colors.secondary,
            backgroundColor=defaultStyles.colors.light,
            height="100%",
            width="100%"
        } = this.props;

        return ( 
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width={width} height={height} viewBox="0 0 1920 1080">
                <defs>
                    <clipPath id="clip-Web_1920_9">
                        <rect width={width} height={height}/>
                    </clipPath>
                </defs>
                <g id="Web_1920_9" data-name="Web 1920 – 9" clip-path="url(#clip-Web_1920_9)">
                    <rect width={width} height={height} fill={backgroundColor}/>
                    <ellipse id="Ellipse_1" data-name="Ellipse 1" cx="702" cy="811.5" rx="702" ry="811.5" transform="translate(-323 -744)" fill={secondaryColor}/>
                    <ellipse id="Ellipse_2" data-name="Ellipse 2" cx="746.5" cy="811.5" rx="746.5" ry="811.5" transform="translate(2298.181 697.159) rotate(91)" fill={color}/>
                </g>
            </svg>
        );
    }
}
 
export default AllTasks;