import React, { Component } from 'react';

import defaultStyles from '../../config/styles';

class AllTasks extends Component {
    render() { 
        const { color=defaultStyles.colors.primary, size="34.025" } = this.props;

        return ( 
            <svg xmlns="http://www.w3.org/2000/svg" width={0.991741367 * size} height={size} viewBox="0 0 33.744 34.025">
                <g id="iconfinder_TaskStroke_1737368" transform="translate(-60.297 -58.67)">
                    <path id="Path_22" data-name="Path 22" d="M65.736,87.4h1.49v.3a5.236,5.236,0,0,0,5.439,4.992H88.6a5.236,5.236,0,0,0,5.44-4.992V68.954a5.237,5.237,0,0,0-5.44-4.992h-1.49v-.3a5.235,5.235,0,0,0-5.44-4.992H65.736A5.236,5.236,0,0,0,60.3,63.662V82.411A5.237,5.237,0,0,0,65.736,87.4ZM88.6,65.6a3.518,3.518,0,0,1,3.659,3.358V87.7A3.518,3.518,0,0,1,88.6,91.061H72.666A3.518,3.518,0,0,1,69.008,87.7V68.954A3.518,3.518,0,0,1,72.666,65.6H88.6ZM62.077,63.662A3.518,3.518,0,0,1,65.736,60.3H81.671a3.518,3.518,0,0,1,3.659,3.358v.3H72.666a5.236,5.236,0,0,0-5.439,4.992V85.769h-1.49a3.519,3.519,0,0,1-3.659-3.358Z" transform="translate(0)" fill={color}/>
                    <path id="Path_23" data-name="Path 23" d="M189.206,198.035a.708.708,0,0,0,0,1.416h14.159a.708.708,0,1,0,0-1.416Z" transform="translate(-117.148 -127.35)" fill={color}/>
                    <path id="Path_24" data-name="Path 24" d="M222.655,254.524a.708.708,0,0,0,.709.708h13.268a.708.708,0,1,0,0-1.417H223.364A.709.709,0,0,0,222.655,254.524Z" transform="translate(-148.361 -178.321)" fill={color}/>
                    <path id="Path_25" data-name="Path 25" d="M202.349,310.313a.708.708,0,0,0-.708-.708H189.206a.708.708,0,0,0,0,1.417h12.435A.709.709,0,0,0,202.349,310.313Z" transform="translate(-117.148 -229.301)" fill={color}/>
                    <path id="Path_26" data-name="Path 26" d="M253.76,365.395H242.108a.708.708,0,0,0,0,1.416H253.76a.708.708,0,1,0,0-1.416Z" transform="translate(-165.49 -280.281)" fill={color}/>
                </g>
            </svg>
        );
    }
}
 
export default AllTasks;