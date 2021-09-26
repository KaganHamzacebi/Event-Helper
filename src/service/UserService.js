import axios from 'axios';
import Service from './Service';

export default class UserService extends Service {
    constructor() {
        super('/user');
    }

    async auth(code) {
        const res = await axios.get('/auth', {
            baseURL: this.endpointBase,
            headers: {
                authorization: code,
            },
        })

        return res;
    }

    async getUser(userToken) {
        const res = await axios.get('/@me', {
            baseURL: this.endpointBase,
            headers: {
                authorization: userToken,
            },
        });

        return res;
    }

    async getGuilds(userToken) {
        const res = await axios.get(`/guilds`, {
            baseURL: this.endpointBase,
            headers: {
                authorization: userToken,
            }
        });

        return res;
    }
}