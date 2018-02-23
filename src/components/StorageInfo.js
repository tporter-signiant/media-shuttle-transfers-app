import React from "react";

import localStorage from '../resources/storage_local.svg';
import s3Storage from '../resources/storage_aws.svg';
import azureStorage from '../resources/storage_azure.svg';

const imageStyle = {
    width: '13px',
    paddingRight: '5px',
    verticalAlign: 'middle'
};

const getImageForStorageType = (type) => {
    if (type === 's3') {
        return s3Storage;
    } else if (type === 'azure') {
        return azureStorage;
    } else {
        return localStorage;
    }
};

const getNameForStorageType = (type) => {
    if (type === 's3') {
        return 'AWS S3';
    } else if (type === 'azure') {
        return 'Microsoft Azure';
    } else {
        return 'Signiant Storage Server';
    }
};

const getDisplayNameForStorage = (storage) => {
    if (storage.type === 's3') {
        return storage.configuration.bucket;
    } else if (storage.type === 'azure') {
        return storage.configuration.container;
    } else {
        return storage.configuration.hostname;
    }
};

class StorageInfo extends React.Component {
    render() {
        const storage = this.props.storage;

        return <span>
            <img style={imageStyle} src={getImageForStorageType(storage.type)}
                 title={getNameForStorageType(storage.type)} alt={getNameForStorageType(storage.type)}/>
            {getDisplayNameForStorage(storage)}
        </span>;
    }
}

export default StorageInfo;