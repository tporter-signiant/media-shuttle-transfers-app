import React from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import uploadIcon from '@fortawesome/fontawesome-free-solid/faAngleUp';
import downloadIcon from '@fortawesome/fontawesome-free-solid/faAngleDown';
import userIcon from '@fortawesome/fontawesome-free-solid/faUser';
import clockIcon from '@fortawesome/fontawesome-free-regular/faClock';
import {Body1, Body2, Body3, Display} from './typography';
import styled from 'styled-components';
import {humanizeTransferRate, humanizeProtocol, humanizeFileSize, hunamizeTimeLeft} from '../humanize';

const highlightColor = '#bde5ee';

const getTransferDirectionIcon = (direction) => direction === 'upload' ? uploadIcon : downloadIcon;

const SpeedAndDirectionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100px;
    flex-shink: 0;
`;

const SpeedAndDirection = ({transfer}) => (
    <SpeedAndDirectionWrapper>
        <FontAwesomeIcon icon={getTransferDirectionIcon(transfer.direction)} size="2x" color={highlightColor}/>
        <Display>{humanizeTransferRate(transfer.activeTransferDetails.transferRateInBitsPerSecond)}</Display>
        <Body3 style={{paddingTop: 5}}>{humanizeProtocol(transfer.protocol)}</Body3>
    </SpeedAndDirectionWrapper>
);

SpeedAndDirection.propTypes = {
    transfer: PropTypes.object
};

const UserWrapper = styled.div`
    padding: 10px;
    width: 200px;
    flex-shink: 0;
`;

const User = ({user}) => (
    <UserWrapper>
        <FontAwesomeIcon icon={userIcon} color={highlightColor}/>
        <Body1 style={{verticalAlign: 'bottom', paddingLeft: 5}}>{user.email}</Body1>
    </UserWrapper>
);

User.propTypes = {
    user: PropTypes.object
};

const CurrentFileWrapper = styled.div`
    padding: 0 10px;
    width: 400px;
    flex: 1 1 auto;
`;

const CurrentFile = ({file}) => (
    <CurrentFileWrapper>
        <Body2 style={{display: 'block'}}>{file.name}</Body2>
        <Body3 style={{display: 'block'}}>{humanizeFileSize(file.size)}</Body3>
    </CurrentFileWrapper>
);

CurrentFile.propTypes = {
    file: PropTypes.object
};

const TimeLeftWrapper = styled.div`
    padding: 10px;
    width: 150px;
    flex-shink: 0;
`;

const TimeLeft = ({seconds}) => {
    const timeLeft = hunamizeTimeLeft(seconds);

    return (
        <TimeLeftWrapper>
            {timeLeft ?
                <React.Fragment>
                    <FontAwesomeIcon icon={clockIcon} color={highlightColor}/>
                    <Body1 style={{paddingLeft: 5}}>{timeLeft}</Body1>
                </React.Fragment>
                : null}
        </TimeLeftWrapper>
    );
};

TimeLeft.propTypes = {
    seconds: PropTypes.number
};

const TransferWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 10px;
    border-bottom: 1px solid #f5f5f5;
`;

const SmallDisplayWrapper = styled.div`
    flex: 1 1 auto;
`;

const ActiveTransfer = ({transfer, isSmallDisplay}) => {
    const details = transfer.activeTransferDetails;

    if (isSmallDisplay) {
        return (
            <TransferWrapper>
                <SpeedAndDirection transfer={transfer}/>
                <SmallDisplayWrapper>
                    <User user={transfer.user}/>
                    <CurrentFile file={details.currentFile}/>
                    <TimeLeft seconds={details.estimatedTimeRemainingInSeconds}/>
                </SmallDisplayWrapper>
            </TransferWrapper>
        );
    } else {
        return (
            <TransferWrapper>
                <SpeedAndDirection transfer={transfer}/>
                <User user={transfer.user}/>
                <CurrentFile file={details.currentFile}/>
                <TimeLeft seconds={details.estimatedTimeRemainingInSeconds}/>
            </TransferWrapper>
        );
    }
};

ActiveTransfer.propTypes = {
    transfer: PropTypes.object,
    isSmallDisplay: PropTypes.bool
};

ActiveTransfer.defaultProps = {
    isSmallDisplay: false
};

export default ActiveTransfer;
