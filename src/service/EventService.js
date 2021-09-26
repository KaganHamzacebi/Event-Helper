import axios from 'axios';
import Service from './Service';

export default class EventService extends Service {
    constructor() {
        super('/event');
    }

    async createEvent(payload) {
        const res = await axios.post('/create_event', payload, {
            baseURL: this.endpointBase
        });

        return res;
    }
}