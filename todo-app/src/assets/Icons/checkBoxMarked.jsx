import React, { Component } from 'react';

import defaultStyles from '../../config/styles';

class AllTasks extends Component {
    render() { 
        const { color=defaultStyles.colors.primary, size="37" } = this.props;

        return ( 
            <svg xmlns="http://www.w3.org/2000/svg" width={1.13513514 * size} height={size} viewBox="0 0 42 37">
                <g id="Group_14" data-name="Group 14" transform="translate(-479 -302)">
                    <rect id="Rectangle_2" data-name="Rectangle 2" width={1.13513514 * size} height={size} rx="7" transform="translate(479 302)" fill={color}/>
                    <path id="iconfinder_checkmark-24_103184" d="M21.652,3.211a.747.747,0,0,0-1.061,0L9.41,14.34a.744.744,0,0,1-1.062,0l-4.9-4.989a.746.746,0,0,0-1.062,0L.222,11.3A.751.751,0,0,0,0,11.823a.786.786,0,0,0,.223.544l4.94,5.184c.292.3.771.776,1.062,1.07l2.124,2.141a.751.751,0,0,0,1.062,0L23.777,6.422a.762.762,0,0,0,0-1.071Z" transform="translate(488.002 308.514)" fill={defaultStyles.colors.white} fill-rule="evenodd"/>
                </g>
            </svg>
        );
    }
}
 
export default AllTasks;