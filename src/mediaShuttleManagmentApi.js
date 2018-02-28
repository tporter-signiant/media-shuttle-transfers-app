import request from './request';
import config from './config';

const {baseUrl} = config.mediaShuttleManagementApi;
const PORTALS_ENDPOINT = `${baseUrl}/portals`;
const TRANSFERS_ENDPOINT = `${baseUrl}/transfers?state=active`;

const getOptions = ({apiKey}) => ({
    mode: 'cors',
    headers: {
        Authorization: apiKey
    }
});

const getPortals = (apiKey) => request(PORTALS_ENDPOINT, getOptions({apiKey}));
const getActiveTransfers = (apiKey) => request(TRANSFERS_ENDPOINT, getOptions({apiKey}));

export {
    getPortals,
    getActiveTransfers
};
