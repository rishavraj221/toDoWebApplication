import api from './httpService';
import { apiEndPoint } from '../config.json';

const endPoint = apiEndPoint + '/users';

export function register(user) {
    return api.post(endPoint, user)
}