import React, { useState } from 'react';

import Icon from '../assets/Icons';
import CheckBox from '../components/Checkbox';
import EditSubTask from '../components/models/EditSubTask';
import defaultStyles from '../config/styles';

const SubListItem = ({ task, subTask, onCheckSubTask, onDeleteSubTask, onPageReload }) => {
    const [editSubTaskVisible, setEditSubTaskVisible] = useState(false);

    return (  
    <div style={{ width: '90%', marginLeft: 30 }}>
        <EditSubTask
            modalVisible={editSubTaskVisible}
            onCancel={() => setEditSubTaskVisible(false)}
            taskId={task._id}
            subTaskId={subTask._id}
            name={subTask.name}
            description={subTask.description}
            onPageReload={onPageReload}
        />
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                marginBottom: 10,
                padding: 10,
                borderRadius: 10,
                width: '98%',
                alignItems: 'center',
        }}>
            <CheckBox isCheck={subTask.status} onClick={onCheckSubTask} />
            <div style={{ marginLeft: 15 }}>
                <div style={{ fontSize: 17, color: defaultStyles.colors.dark }}>{subTask.name}</div>
                <div style={{ fontSize: 14, color: defaultStyles.colors.medium }}>{subTask.description}</div>
            </div>
            <div className="subTaskItem" onClick={() => setEditSubTaskVisible(true)} style={{ position: 'absolute', marginLeft: '75%' }}>
                <Icon name="Edit" />
            </div>
            <div className="subTaskItem" onClick={onDeleteSubTask} style={{ position: 'absolute', marginLeft: '82%' }}>
                <Icon name="Delete" />
            </div>
        </div>
        <div style={{ height: 1, backgroundColor: defaultStyles.colors.medium, width: '100%'}}></div>
    </div>
    );
}
 
export default SubListItem;