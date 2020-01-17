import axios from 'axios';

export class ApiWrapper {
    async get(url) {
        return axios.get(url)
            .catch((error) => {
                throw error;
            });
    }

    async post(url, data) {
        return axios.post(url, data)
            .catch((error) => {
                throw error;
            });
    }
}