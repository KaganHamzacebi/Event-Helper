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

    async editEvent(payload, token) {
        const res = await axios.post('/edit_event', {payload: payload, token: token}, {
            baseURL: this.endpointBase
        });

        return res;
    }

    async repeatEvent(payload, token) {
        const res = await axios.post('/repeat_event', {payload: payload, token: token}, {
            baseURL: this.endpointBase
        });

        return res;
    }

    async cancelEvent(guild_id, token) {
        const res = await axios.get(`/cancel_event/${guild_id}`, {
            baseURL: this.endpointBase
        });

        return res;
    }
}