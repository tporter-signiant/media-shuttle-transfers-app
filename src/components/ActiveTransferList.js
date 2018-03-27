import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {TransitionGroup} from 'react-transition-group';
import ActiveTransfer from './ActiveTransfer';
import PortalHeading from './PortalHeading';
import {keyBy} from 'lodash';
import {FadeTransition, ShrinkTransition} from './transitions';
import {Headline, Display} from './typography';

const TransfersHeadline = styled(Headline)`
    padding: 20px;
    background: linear-gradient(90deg, #d6e9f1 0%, #eefaf8 34%, #9bc1e5 100%);
`;

const NoActiveTransfersWrapper = styled(Display)`
    padding: 10px;
    text-align: center;
`;

const NoActiveTransfers = () => (
    <FadeTransition in={true} duration={1000}>
        <NoActiveTransfersWrapper>No active transfers</NoActiveTransfersWrapper>
    </FadeTransition>
);

class ActiveTransferList extends React.Component {

    render () {
        const {
            portals,
            transfers,
            isSmallDisplay,
        } = this.props;

        const portalMap = keyBy(portals, 'id');
        let items = [];
        let currentPortalId = null;

        transfers.forEach(transfer => {
            if (transfer.portalId !== currentPortalId) {
                const transferPortal = portalMap[transfer.portalId];

                items.push(
                    <FadeTransition key={transferPortal.id} duration={750}>
                        <PortalHeading portal={transferPortal} isSmallDisplay={isSmallDisplay}/>
                    </FadeTransition>
                );

                currentPortalId = transfer.portalId;
            }

            items.push(
                <ShrinkTransition key={transfer.id} duration={500}>
                    <ActiveTransfer transfer={transfer} isSmallDisplay={isSmallDisplay}/>
                </ShrinkTransition>
            );
        });

        return (
            <React.Fragment>
                <TransfersHeadline>Active Transfers</TransfersHeadline>
                <TransitionGroup>{items}</TransitionGroup>
                {transfers.length === 0 ? <NoActiveTransfers/> : null}
            </React.Fragment>
        );
    }
}

ActiveTransferList.propTypes = {
    transfers: PropTypes.arrayOf(PropTypes.object),
    portals: PropTypes.arrayOf(PropTypes.object),
    isSmallDisplay: PropTypes.bool
};

ActiveTransferList.defaultProps = {
    isSmallDisplay: false
};

export default ActiveTransferList;
