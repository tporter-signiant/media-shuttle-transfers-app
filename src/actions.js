import {getPortals, getActiveTransfers} from './mediaShuttleManagmentApi';
import config from './config';

export const LIST_PORTALS = 'LIST_PORTALS';
export const LIST_TRANSFERS = 'LIST_TRANSFERS';
export const LIST_PORTALS_SUCCESS = 'LIST_PORTALS_SUCCESS';
export const LIST_TRANSFERS_SUCCESS = 'LIST_TRANSFERS_SUCCESS';
export const SHOW_ERROR = 'SHOW_ERROR';
export const CLEAR_ERROR = 'CLEAR_ERROR';

/* eslint-disable no-undef */

const getApiKey = () => {
    const urlParams = new URLSearchParams(window.location.search);

    if (urlParams.get('apiKey')) {
        return urlParams.get('apiKey');
    } else {
        return config.mediaShuttleManagementApi.apiKey;
    }
};

function listPortals () {
    return {
        type: LIST_PORTALS
    };
}

function listTransfers () {
    return {
        type: LIST_TRANSFERS
    };
}

function listPortalsSuccess (portals) {
    return {
        type: LIST_PORTALS_SUCCESS,
        portals
    };
}

function showError (error) {
    return {
        type: SHOW_ERROR,
        error
    };
}

function clearError (error) {
    return {
        type: CLEAR_ERROR,
        error
    };
}

function listTransferSuccess (transfers) {
    return {
        type: LIST_TRANSFERS_SUCCESS,
        transfers
    };
}

function loadPortals () {
    return async function (dispatch) {
        dispatch(listPortals());

        try {
            const apiKeys = getApiKey().split(',');
            const portalsAcrossApiKeys = await Promise.all(apiKeys.map(apiKey => getPortals(apiKey)));
            let portals = [];
            portalsAcrossApiKeys.forEach(portalsForApiKey => portals = portals.concat(portalsForApiKey.items));
            dispatch(clearError());
            dispatch(listPortalsSuccess(portals));
        } catch (err) {
            dispatch(showError(err));
        }
    };
}

function loadTransfers () {
    return async function (dispatch) {
        dispatch(listTransfers());

        try {
            const apiKeys = getApiKey().split(',');
            const transfersAcrossApiKeys = await Promise.all(apiKeys.map(apiKey => getActiveTransfers(apiKey)));
            let transfers = [];
            transfersAcrossApiKeys.forEach(transfersForApiKey =>
                transfers = transfers.concat(transfersForApiKey.items));
            dispatch(clearError());
            dispatch(listTransferSuccess(transfers));
        } catch (err) {
            dispatch(showError(err));
        }
    };
}

export {
    loadPortals,
    loadTransfers
};
