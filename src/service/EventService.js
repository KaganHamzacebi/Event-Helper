import axios from 'axios';
import Service from './Service';

export default class EventService extends Service {
    constructor() {
        super('/event');
    }

    async createEvent(payload, token) {
        const res = await axios.post('/create_event', payload, {
            baseURL: this.endpointBase,
            headers: {
                authorization: token,
            },
        });

        return res;
    }

    async editEvent(payload, token) {
        const res = await axios.post('/edit_event', payload, {
            baseURL: this.endpointBase,
            headers: {
                authorization: token,
            },
        });

        return res;
    }

    async repeatEvent(event_id, token) {
        const res = await axios.get(`/repeat_event${event_id}`, {
            baseURL: this.endpointBase,
            headers: {
                authorization: token,
            },
        });

        return res;
    }

    async cancelEvent(event_id, token) {
        const res = await axios.get(`/cancel_event/${event_id}`, {
            baseURL: this.endpointBase,
            headers: {
                authorization: token,
            }
        });

        return res;
    }

    async getEvent(event_id, token) {
        const res = await axios.get(`/get_event/${event_id}`, {
            baseURL: this.endpointBase,
            headers: {
                authorization: token,
            }
        });

        return res;
    }
}