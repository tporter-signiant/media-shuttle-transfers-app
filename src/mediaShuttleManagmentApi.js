import request from './request';
import config from './config';

const {baseUrl, apiKey} = config.mediaShuttleManagementApi;
const PORTALS_ENDPOINT = `${baseUrl}/portals`;
const TRANSFERS_ENDPOINT = `${baseUrl}/transfers?state=active`;

const getApiKey = () => {
    const urlParams = new URLSearchParams(window.location.search);

    if (urlParams.get('apiKey')) {
        return urlParams.get('apiKey');
    } else {
        return apiKey;
    }
};

const options = {
    headers: {
        Authorization: getApiKey()
    }
};

const getPortals = () => request(PORTALS_ENDPOINT, options);
const getActiveTransfers = () => request(TRANSFERS_ENDPOINT, options);

export {
    getPortals,
    getActiveTransfers
};
