import api from './httpService';
import { apiEndPoint } from '../config.json';

const endPoint = apiEndPoint + '/auth';

export function login(user) {
    return api.post(endPoint, user)
}

export function googleLogin(user) {
    return api.post(`${endPoint}/googleLogin`, user)
}