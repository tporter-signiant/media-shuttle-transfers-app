import Moment from 'moment';
import numeral from 'numeral';

const humanizeTransferRate = (transferRateInBitsPerSecond) => {
    if (!isNaN(transferRateInBitsPerSecond)) {
        if (transferRateInBitsPerSecond === 0) {
            return '-';
        } else {
            return numeral(transferRateInBitsPerSecond).format('0.0 b').replace('.0', '').replace('B', 'bps');
        }
    }
};

const humanizeProtocol = (protocol) => {
    if (protocol === 'mxwan') {
        return 'UDP';
    } else if (protocol === 'mxtcp') {
        return 'TCP';
    } else if (protocol === 'http') {
        return 'HTTP';
    }
};

const humanizeFileSize = (sizeInBytes) => {
    if (!isNaN(sizeInBytes)) {
        return numeral(sizeInBytes).format('0.0 b').replace('.0', '');
    }
};

const hunamizeTimeLeft = (timeLeftInSeconds) => {
    if (!isNaN(timeLeftInSeconds)) {
        return `${Moment.duration(timeLeftInSeconds, 'seconds').humanize()} left`;
    }
};

export {
    humanizeTransferRate,
    humanizeProtocol,
    humanizeFileSize,
    hunamizeTimeLeft
};
