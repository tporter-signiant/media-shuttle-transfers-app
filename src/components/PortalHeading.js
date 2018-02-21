import React from 'react';
import styled from 'styled-components';
import PortalAvatar from './PortalAvatar';
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

const PortalHeading = ({portal, isSmallDisplay}) => (
    <PortalHeadingWrapper>
        <PortalAvatar type={portal.type} />
        <HeadlineWrapper>
            <Title>{portal.name}</Title>
            {isSmallDisplay ? null : <Subheading>{portal.url}</Subheading>}
        </HeadlineWrapper>
    </PortalHeadingWrapper>
);

export default PortalHeading;
