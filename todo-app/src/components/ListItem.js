import React, { useState } from 'react';

import { checkTask, checkSubTask, deleteTask, deleteSubTask } from '../services/taskSerivce';
import SubListItem from './SubListItem';
import CreateSubTask from '../components/models/CreateSubTask';
import EditTask from '../components/models/EditTask';
import Icon from '../assets/Icons';
import CheckBox from '../components/Checkbox';
import defaultStyles from '../config/styles';
import './list.css';

const ListItem = ({ task, handleTaskMenu, onPageReload, taskStatus }) => {
    const [listClicked, setListClicked] = useState(false);
    const [menuVisible, setMenuVisible] = useState(false);
    const [editModalVisible, setEditModalVisible] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    
    const handleCheckTask = async () => {
        try {
            await checkTask(task._id);
            onPageReload();
        } catch (ex) {}
    }

    const handleCheckSubTask = async subTaskId => {
        try {
            await checkSubTask({
                taskId: task._id,
                subTaskId
            });
            onPageReload();
        } catch (ex) {}
    }

    const handleDeleteTask = async () => {
        try {
            setMenuVisible(false);
            await deleteTask(task._id);
            onPageReload();
        } catch (ex) {}
    }

    const handleDeleteSubTask = async subTaskId => {
        try {
            await deleteSubTask({
                taskId: task._id,
                subTaskId
            });
            onPageReload();
        } catch (ex) {}
    }
    
    return (  
        <React.Fragment>
            <CreateSubTask
                modalVisible={modalOpen}
                onCancel={() => {
                    setModalOpen(!modalOpen)
                    onPageReload()
                }}
                taskId={task._id}
                hideMenu={() => setMenuVisible(false)}
            />
            <EditTask
                modalVisible={editModalVisible}
                onCancel={() => setEditModalVisible(false)}
                taskId={task._id}
                name={task.name}
                description={task.description}
                onPageReload={onPageReload}
                hideMenu={() => setMenuVisible(false)}
            />
            <div
                style={{
                    boxShadow: `0px 3px 6px ${defaultStyles.colors.medium}`,
                    display: 'flex',
                    flexDirection: 'row',
                    margin: 10,
                    padding: 10,
                    borderRadius: 10,
                    width: '95%',
                    alignItems: 'center',
                    backgroundColor: listClicked ? defaultStyles.colors.light : defaultStyles.colors.white
                }}>
                <CheckBox isCheck={taskStatus} onClick={handleCheckTask} />
                <div className="tasks" onClick={() => setListClicked(!listClicked)} style={{ marginLeft: 15 }}>
                    <div style={{ fontSize: 17, color: defaultStyles.colors.dark }}>{task.name}</div>
                    <div style={{ fontSize: 14, color: defaultStyles.colors.medium }}>{task.description}</div>
                </div>
                {task.subTasks.length > 0 && <div onClick={handleTaskMenu} style={{
                    position: 'absolute', marginLeft: '75%',
                    fontSize: 13,
                    color: defaultStyles.colors.detail
                }}>{`${task.subTasks.length} sub-task${task.subTasks.length === 1 ? '' : 's'}`}</div>}
                <div style={{ position: 'absolute', marginLeft: '90%' }}>
                    <div onClick={() => setMenuVisible(!menuVisible)} className="menu">
                        <Icon name="Menu" />
                    </div>
                    {menuVisible && 
                    <div style={{
                        position: 'absolute',
                        display: 'flex',
                        flexDirection: 'column',
                        backgroundColor: defaultStyles.colors.white,
                        padding: 10,
                        marginLeft: -120,
                        marginTop: 10,
                        borderRadius: 15,
                        justifyContent: 'center',
                        boxShadow: `0px 3px 6px ${defaultStyles.colors.medium}`,
                        zIndex: 6
                    }}>
                        <div className="menuItem" onClick={() => setModalOpen(true)} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <Icon name="List" size="24"/>
                            <div style={{ color: defaultStyles.colors.primary, marginLeft: 8 }}>Create&nbsp;Sub&nbsp;Tasks</div>
                        </div>
                        <div className="menuItem" onClick={() => setEditModalVisible(true)} style={{ marginTop: 10, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <Icon name="Edit" size="24"/>
                            <div style={{ color: defaultStyles.colors.medium, marginLeft: 8 }}>Edit</div>
                        </div>
                        <div className="menuItem" onClick={handleDeleteTask} style={{ marginTop: 10, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <Icon name="Delete" size="24"/>
                            <div style={{ color: defaultStyles.colors.danger, marginLeft: 8 }}>Delete</div>
                        </div>
                    </div>}
                </div>
            </div>
            {task.subTasks.length > 0 && listClicked && 
                task.subTasks.map(subTask => 
                    <SubListItem 
                        task={task}
                        subTask={subTask}
                        onCheckSubTask={() => handleCheckSubTask(subTask._id)}
                        onDeleteSubTask={() => handleDeleteSubTask(subTask._id)}
                        onPageReload={onPageReload}
                    />
            )}
        </React.Fragment>
    );
}

const listContainerStyle = {
    
}
 
export default ListItem;