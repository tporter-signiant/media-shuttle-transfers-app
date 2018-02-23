import util from 'util';

import request from './request';
import config from './config';

const {baseUrl, apiKey} = config.mediaShuttleManagementApi;
const TRANSFERS_ENDPOINT = `${baseUrl}/transfers?state=active`;
const PORTALS_ENDPOINT = `${baseUrl}/portals`;
const PORTAL_STORAGE_ENDPOINT = `${PORTALS_ENDPOINT}/%s/storage`;

const getApiKey = () => {
    const urlParams = new URLSearchParams(window.location.search);

    if (urlParams.get('apiKey')) {
        return urlParams.get('apiKey');
    } else {
        return apiKey;
    }
};

const options = {
    mode: 'cors',
    headers: {
        Authorization: getApiKey()
    }
};

const getPortals = () => request(PORTALS_ENDPOINT, options);
const getActiveTransfers = () => request(TRANSFERS_ENDPOINT, options);
const getStorageForPortal = (portalId) => request(util.format(PORTAL_STORAGE_ENDPOINT, portalId), options);

export {
    getPortals,
    getActiveTransfers,
    getStorageForPortal
};
