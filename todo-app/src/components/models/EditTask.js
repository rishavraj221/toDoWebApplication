import React from 'react';
import Joi from 'joi-browser';

import { editTask } from '../../services/taskSerivce';
import Icon from '../../assets/Icons';
import Form from '../form';
import FormButton from '../FormButton';
import defaultStyles from '../../config/styles';
import './modal.css';

class EditTask extends Form {
    state = {
        data: { name: this.props.name, description: this.props.description },
        errors: {},
        loading: false
    }

    schema = {
        name: Joi.string().min(1).max(100).required().label("Task name"),
        description: Joi.string().max(255).label("Description"),
    }

    doSubmit = async () => {
        try {
            this.setState({ loading: true });
            const dataToSend = {
                taskId: this.props.taskId,
                ...this.state.data
            }
            await editTask(dataToSend);
            this.props.onCancel();
            this.props.onPageReload();
            this.props.hideMenu();
        } catch (ex) {
            if (ex.response && ex.response.status === 400) {
                const errors = { ...this.state.errors };
                errors.name = ex.response.data;
                this.setState({ errors });
            }
        }
        this.setState({ loading: false });
    }

    render() { 
        if (this.props.modalVisible) return (  
            <div style={modalStyles}>
                <div style={modalContainerStyle}>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <div style={{ fontSize: 30, color: defaultStyles.colors.dark }}>Edit Task</div>
                        <div className="createTask" onClick={this.props.onCancel} style={{ marginLeft: '70%' }}>
                            <Icon name="Cancel" size="40"/>
                        </div>
                    </div>
                    {this.state.loading && <div style={{ color: 'green', marginLeft: '40%' }}>Updating...</div>}
                    <form onSubmit={this.handleSubmit} style={{ justifyContent: 'center', flexDirection: 'column' }}>
                        {this.renderInput("name", formStyles, "List", "Task name")}
                        {this.renderInput("description", formStyles, "Comment", "Description")}
                        <div style={{  marginLeft: '70%' }}>
                            <FormButton title="Save" />
                        </div>
                    </form>
                </div>
            </div>
        );
        return null;
    }
}

const modalStyles = {
    height: '100%',
    width: '100%',
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    alignItems: 'center',
    zIndex: 10,
    justifyContent: 'center'
};

const modalContainerStyle = {
    height: 250,
    width: 600,
    opacity: 1.5,
    backgroundColor: defaultStyles.colors.white,
    borderRadius: 25,
    padding: 30,
};

const formStyles = {
    padding: 10,
    fontSize: 22,
    width: '90%',
    color: defaultStyles.colors.primary,
    marginLeft: 10,
    marginTop: 10,
    borderLeft: 0,
    borderRight: 0,
    borderTop: 0,
    borderBottomWidth: 1,
    borderBottomColor: defaultStyles.colors.primary
};

export default EditTask;