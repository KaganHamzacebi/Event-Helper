import axios from 'axios';
import Service from './Service';

export default class GuildService extends Service {
    constructor() {
        super('/guild');
    }

    async getChannelsAndRoles(token) {
        const res = await axios.get('/channels_and_roles/' + token, {
            baseURL: this.endpointBase
        });

        const tmpChannels = res.data.channels.map((channel) => {
            return { label: channel.name, value: channel.id }
        })

        const tmpRoles = res.data.roles.map((role, index) => {
            return { label: role.name, color: role.color, value: role.id, selected: false }
        })

        return [tmpChannels, tmpRoles];
    }

    async getGuildSettings(userToken) {
        const res = await axios.post('/settings', {}, {
            baseURL: this.endpointBase,
            headers: {
                authorization: userToken,
            }
        });

        return res;
    }

    async getEvents(userToken, gid) {
        const res = await axios.get('/get_events/' + gid, {
            baseURL: this.endpointBase,
            headers: {
                authorization: userToken,
            }
        })

        return res;
    }
}