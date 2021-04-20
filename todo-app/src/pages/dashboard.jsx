import React, { useState, useEffect } from 'react';
import { Element } from 'react-scroll';
import jwtDecode from 'jwt-decode';

import { getTasks } from '../services/taskSerivce';
import CreateTask from '../components/models/CreateTask';
import Illustration from '../assets/Illustrations';
import Button from '../components/Button';
import Header from '../components/header';
import Tab from '../components/tab';
import ListItem from '../components/ListItem';
import defaultStyles from '../config/styles';
import './dashboard.css';

const Dashboard = ({ history }) => {
    const [dropDownOpen, setDropDownOpen] = useState(false);
    const [tab, setTab] = useState('1');
    const [modalOpen, setModalOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const [user, setUser] = useState({ });
    const [data, setData] = useState([]);
    const [pendingTasksData, setPendingTasksData] = useState([]);
    const [completedTasksData, setCompletedTasksData] = useState([]);

    const handleLogOut = () => {
        localStorage.removeItem('token');
        history.push('/');
    }

    useEffect(() => {
        try {
            const jwt = localStorage.getItem('token');
            const user = jwtDecode(jwt);
            setUser(user);
            getData();
        } catch (ex) {}
    }, []);

    const getData = async () => {
        setLoading(true);
        const { data } = await getTasks();
        setLoading(false);
        setData(data);
        setPendingTasksData(data.filter(t => !t.status));
        setCompletedTasksData(data.filter(t => t.status));
        history.push('/dashboard');
    }

    return (  
        <React.Fragment>
            <CreateTask
                modalVisible={modalOpen}
                onCancel={() => {
                    setModalOpen(!modalOpen)
                    getData()
                }}
            />
            <div style={containerStyle} className="bar">
                <Header
                    dropDownVisible={dropDownOpen}
                    handleShowDropDown={() => setDropDownOpen(!dropDownOpen)}
                    handleLogOut={handleLogOut}
                    name={user.fullName}
                />
                <Tab
                    tab={tab}
                    onClickTab1={() => {
                        setTab('1');
                        getData();
                    }}
                    onClickTab2={() => {
                        setTab('2');
                        getData();
                    }}
                    onClickTab3={() => {
                        setTab('3');
                        getData();
                    }}
                    tab1items={data.length}
                    tab2items={pendingTasksData.length}
                    tab3items={completedTasksData.length}
                />
                {loading && <div style={{ position: 'absolute', color: 'green', marginLeft: '60%', marginTop: 10, zIndex: 7 }}>Loading...</div>}
                {tab === '1' && data.length === 0 &&
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 45 }}>
                        <Illustration name="AllTasks" height='70%' width='70%' />
                        <div style={{ marginTop: 25, fontSize: 15, color: defaultStyles.colors.medium }}>You have not created any task, create it now</div>
                        <Button onClick={() => setModalOpen(true)} icon="Plus" title="Create" width={100} />
                    </div>
                }
                {tab === '1' && data.length > 0 && 
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Button onClick={() => setModalOpen(true)} icon="Plus" title="Create" width={100} />
                        <div style={{ width: "100%" }}>
                            <Element name="test7" className="element" id="containerElement" style={scrollContainerStyle}>
                                {data.map(task => 
                                    <ListItem taskStatus={task.status} task={task} onPageReload={getData}/>
                                )}
                            </Element>
                        </div>
                    </div>
                }
                {tab === '2' && pendingTasksData.length === 0 &&
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 45 }}>
                        <Illustration name="Pending" height='70%' width='70%' />
                        <div style={{ marginTop: 25, fontSize: 15, color: defaultStyles.colors.medium }}>You have no task pending, great...</div>
                    </div>
                }
                {tab === '2' && pendingTasksData.length > 0 &&
                    <div style={{ width: "100%" }}>
                        <Element style={scrollContainerStyle2}>
                            {data.filter(t => !t.status).map(task => 
                                <ListItem taskStatus={false} task={task} onPageReload={getData}/>
                            )}
                        </Element>
                    </div>
                }
                {tab === '3' && completedTasksData.length === 0 &&
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 45 }}>
                        <Illustration name="Completed" height='60%' width='60%' />
                        <div style={{ marginTop: 25, fontSize: 15, color: defaultStyles.colors.medium }}>You have not completed any task</div>
                    </div>
                }
                {tab === '3' && completedTasksData.length > 0 && 
                <div style={{ width: "100%" }}>
                    <Element style={scrollContainerStyle2}>
                        {data.filter(t => t.status).map(task => 
                            <ListItem taskStatus={true} task={task} onPageReload={getData}/>
                        )}
                    </Element>
                </div>
                } 
            </div>
        </React.Fragment>
    );
}

const containerStyle = {
    height: 720,
    width: 1000,
    backgroundColor: defaultStyles.colors.white,
    borderRadius: 35,
}

const scrollContainerStyle = {
    position: 'relative',
    height: 430,
    margin: 10,
    overflow: 'scroll',
}
const scrollContainerStyle2 = {
    position: 'relative',
    height: 530,
    margin: 10,
    overflow: 'scroll',
}
 
export default Dashboard;