import React from 'react';

import defaultStyles from '../config/styles';
import './tab.css';

const Tabs = ({ tab, onClickTab1, onClickTab2, onClickTab3, tab1items, tab2items, tab3items }) => {

    return ( 
    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            paddingBottom: 15,
            marginLeft: 70,
            marginRight: 70,
            width: '90%',
        }}>
            <div className="tab" style={{
                marginLeft: 60,
                color: tab === '1' ? defaultStyles.colors.primary : defaultStyles.colors.medium
            }}
            onClick={onClickTab1}
            >ALL TASKS<sup>{
                tab1items > 0 ? tab1items : null
            }</sup></div>
            <div className="tab" style={{
                marginLeft: 70,
                color: tab === '2' ? defaultStyles.colors.primary : defaultStyles.colors.medium
            }}
            onClick={onClickTab2}
            >PENDING<sup>{
                tab2items > 0 ? tab2items : null
            }</sup></div>
            <div className="tab" style={{
                marginLeft: 70,
                color: tab === '3' ? defaultStyles.colors.primary : defaultStyles.colors.medium
            }}
            onClick={onClickTab3}
            >COMPLETED<sup>{
                tab3items > 0 ? tab3items : null
            }</sup></div>
        </div>
        <div style={{ width: '90%', height: 1, backgroundColor: defaultStyles.colors.medium }}/>
    </div>
    );
}
 
export default Tabs;