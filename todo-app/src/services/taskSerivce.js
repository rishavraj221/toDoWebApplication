import api from './httpService';
import { apiEndPoint } from '../config.json';

const endPoint = apiEndPoint + '/tasks';
const header = {
    headers: {
        'x-auth-token': localStorage.getItem('token')
    }
};

export function getTasks() {
    return api.get(endPoint, header);
}

export function checkTask(taskId) {
    return api.put(`${endPoint}/checkTask`, { taskId }, header);
}

export function checkSubTask(subTask) {
    return api.put(`${endPoint}/checkSubTask`, subTask, header);
}

export function deleteTask(taskId) {
    return api.put(`${endPoint}/deleteTask`, { taskId }, header);
}

export function deleteSubTask(subTask) {
    return api.put(`${endPoint}/deleteSubTask`, subTask, header);
}

export function createTask(task) {
    return api.post(endPoint, task, header);
}

export function createSubTask(task) {
    return api.post(`${endPoint}/createSubTask`, task, header);
}

export function editTask(task) {
    return api.put(endPoint, task, header);
}

export function editSubTask(task) {
    return api.put(`${endPoint}/editSubTask`, task, header);
}