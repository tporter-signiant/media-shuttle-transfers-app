import React from 'react';
import styled from 'styled-components';
import PortalAvatar from './PortalAvatar';
import StorageInfo from './StorageInfo';
import {Title, Subheading} from './typography';

const PortalHeadingWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 20px;
    border-bottom: 1px solid #e5e5e5;
    border-top: 1px solid #e5e5e5;
`;

const HeadlineWrapper = styled.div`
    padding: 0 20px;
`;

const PortalHeading = ({portal, isSmallDisplay}) => {

    const storageSubheadings = portal.storage.map((storage) =>
        <Subheading>
            <StorageInfo storage={storage}/>
        </Subheading>
    );

    return (<PortalHeadingWrapper>
        <PortalAvatar type={portal.type} />
        <HeadlineWrapper>
            <Title>{portal.name}</Title>

            {isSmallDisplay ? null : <Subheading>{portal.url}</Subheading>}
            {storageSubheadings}

        </HeadlineWrapper>
    </PortalHeadingWrapper>);
};

export default PortalHeading;
