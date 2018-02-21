import React from 'react';
import styled from 'styled-components';
import sendImage from '../resources/send-portal-avatar.png';
import submitImage from '../resources/submit-portal-avatar.png';
import shareImage from '../resources/share-portal-avatar.png';

const PortalAvatarWrapper = styled.div`
    width: 80px;
    height: 80px;
    border: 2px solid white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fafafa;
    
    &:before {
        content: '';
        border-radius: 50%;
        width: 90px;
        height: 90px;
        background-image: linear-gradient(to bottom, #80dcff 0%, #1a91d0 100%);
        position: absolute;
        z-index: -1;
    }
`;

const getImageForPortalType = (type) => {
    if (type === 'Send') {
        return sendImage;
    } else if (type === 'Submit') {
        return submitImage;
    } else {
        return shareImage;
    }
};

const PortalAvatar = ({type}) => (
    <PortalAvatarWrapper>
        <img src={getImageForPortalType(type)} alt=""/>
    </PortalAvatarWrapper>
);

export default PortalAvatar;
