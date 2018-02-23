import React from 'react';
import {connect} from 'react-redux';
import {sortBy} from 'lodash';
import {loadPortals, loadTransfers} from '../actions';
import ShowError from '../components/ShowError';
import ActiveTransferList from '../components/ActiveTransferList';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import spinnerIcon from '@fortawesome/fontawesome-free-solid/faSpinner';

const TRANSFERS_REFRESH_INTERVAL = 5000;

class ActiveTransfers extends React.Component {

    componentDidMount () {
        this.props.loadPortals();
        this.loadTransfers();
    }

    loadTransfers () {
        if (this.props.transfersLoading === false) {
            this.props.loadTransfers();
        }

        this.timer = setTimeout(this.loadTransfers.bind(this), TRANSFERS_REFRESH_INTERVAL);
    }

    render () {
        const {
            portalsLoading,
            portals,
            transfers: transfersProp,
            error,
            isSmallDisplay
        } = this.props;

        const transfers = sortBy(transfersProp, 'portalId');

        if (error) {
            const message = 'An error occurred loading data from Media Shuttle: ' +
                `${error.message} (status ${error.status})`;
            return <ShowError message={message}/>;
        }

        if (portalsLoading) {
            return (
                <div style={{textAlign: 'center', paddingTop: 100}}>
                    <FontAwesomeIcon icon={spinnerIcon} spin size="6x" color={'#ccc'}/>
                </div>
            );
        } else {
            return <ActiveTransferList transfers={transfers} portals={portals} isSmallDisplay={isSmallDisplay}/>;
        }
    }
}

const mapStateToProps = (state) => ({
    portalsLoading: state.portals.isLoading,
    portals: state.portals.items,
    transfers: state.transfers.items,
    transfersLoading: state.portals.isLoading,
    error: state.error,
    isSmallDisplay: state.browser.lessThan.medium
});

const mapDispatchToProps = (dispatch) => ({
    loadPortals: () => dispatch(loadPortals()),
    loadTransfers: () => dispatch(loadTransfers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ActiveTransfers);
