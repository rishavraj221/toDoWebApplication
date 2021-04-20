import React, { useState } from 'react';

import Icon from '../assets/Icons';
import Button from '../components/Button';
import CheckBox from '../components/Checkbox';
import ListItem from '../components/ListItem';
import defaultStyles from '../config/styles';
import './list.css';

const List = ({ data }) => {
    const [listClicked, setListClicked] = useState(false);

    return (<div style={{ width: "90%" }}>
        {data.map(task => 
            <React.Fragment>
                <ListItem task={task} />
                {task.subTasks.length > 0 && listClicked && 
                    task.subTasks.map(task => 
                        <div style={{ width: '90%' }}>
                            <div
                                className="tasks"
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    marginBottom: 10,
                                    padding: 10,
                                    borderRadius: 10,
                                    width: '100%',
                                    alignItems: 'center',
                            }}>
                                <CheckBox isCheck={task.status === 'completed'} />
                                <div style={{ marginLeft: 15 }}>
                                    <div style={{ fontSize: 17, color: defaultStyles.colors.dark }}>{task.taskName}</div>
                                    <div style={{ fontSize: 14, color: defaultStyles.colors.medium }}>{task.taskDescription}</div>
                                </div>
                            </div>
                            <div style={{ height: 1, backgroundColor: defaultStyles.colors.medium, width: '100%'}}></div>
                        </div>
                        )}
            </React.Fragment>
        )}
    </div>
    );
}
 
export default List;