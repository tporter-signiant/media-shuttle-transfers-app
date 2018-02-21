import {combineReducers} from 'redux';
import {responsiveStateReducer} from 'redux-responsive';
import {sortBy} from 'lodash';
import {
    LIST_PORTALS,
    LIST_PORTALS_SUCCESS,
    LIST_TRANSFERS,
    LIST_TRANSFERS_SUCCESS,
    SHOW_ERROR
} from './actions';

const portals = (state = {isLoading: false, items: []}, action) => {
    switch (action.type) {
        case LIST_PORTALS:
            return Object.assign({}, {
                isLoading: true,
                items: state.items
            });

        case LIST_PORTALS_SUCCESS:
            return Object.assign({}, {
                isLoading: false,
                items: sortBy(action.portals, 'name')
            });

        default:
            return state;
    }
};

const transfers = (state = {isLoading: false, items: []}, action) => {
    switch (action.type) {
        case LIST_TRANSFERS:
            return Object.assign({}, {
                isLoading: true,
                items: state.items
            });

        case LIST_TRANSFERS_SUCCESS:
            return Object.assign({}, {
                isLoading: false,
                items: sortBy(action.transfers, 'startTime')
            });

        default:
            return state;
    }
};

const error = (state = null, action) => {
    switch (action.type) {
        case SHOW_ERROR:
            return action.error;

        default:
            return state;
    }
};

export default combineReducers({
    portals,
    transfers,
    error,
    browser: responsiveStateReducer
});
