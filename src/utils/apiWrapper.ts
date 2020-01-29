import axios from 'axios';

export class ApiWrapper {
    async get(url: string) {
        return axios.get(url)
            .catch((error) => {
                throw error;
            });
    }

    async post(url: string, data: object) {
        return axios.post(url, data)
            .catch((error) => {
                throw error;
            });
    }
}