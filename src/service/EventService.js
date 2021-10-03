import axios from 'axios';
import Service from './Service';

export default class EventService extends Service {
    constructor() {
        super('/event');
    }

    async createEvent(payload, token) {
        const res = await axios.post('/create_event', {payload: payload, token: token}, {
            baseURL: this.endpointBase
        });

        return res;
    }
}