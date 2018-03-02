import util from 'util';

import request from './request';
import config from './config';

const {baseUrl, apiKey} = config.mediaShuttleManagementApi;
const TRANSFERS_ENDPOINT = `${baseUrl}/transfers?state=active`;
const PORTALS_ENDPOINT = `${baseUrl}/portals`;
const STORAGE_ENDPOINT = `${baseUrl}/storage`;
const PORTAL_STORAGE_ENDPOINT = `${PORTALS_ENDPOINT}/%s/storage`;
const DELIVERY_FILES_ENDPOINT = `${PORTALS_ENDPOINT}/%s/delivery/%s/files`;

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

const getFilesForDelivery = (portalId, deliveryId) => {
    return request(util.format(DELIVERY_FILES_ENDPOINT, portalId, deliveryId), options);
};

const getStorageForPortal = async (portalId) => {
    const portalStorages = await request(util.format(PORTAL_STORAGE_ENDPOINT, portalId), options);
    return Promise.all(portalStorages.map((portalStorage) => {
        return request(`${STORAGE_ENDPOINT}/${portalStorage.storageId}`, options);
    }));
};

export {
    getPortals,
    getActiveTransfers,
    getStorageForPortal,
    getFilesForDelivery
};
