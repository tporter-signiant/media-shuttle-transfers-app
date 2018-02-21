import styled from 'styled-components';

export const Headline = styled.h1`
    font-size: 30px;
    font-weight: 300;
    padding: 0;
    margin: 0;
`;

export const Title = styled.h2`
    font-size: 28px;
    font-weight: 300;
    padding: 0;
    margin: 0;
`;

export const Subheading = styled.h3`
    font-size: 13px;
    font-weight: 400;
    padding: 0;
    margin: 0;
    color: #999999;
`;

export const Body1 = styled.span`
    font-size: 14px;
    font-weight: 300;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
`;

export const Body2 = styled(Body1)`
    font-size: 14px;
    font-weight: 400;
`;

export const Body3 = styled(Body1)`
    font-size: 13px;
    font-weight: 200;
    color: #999999;
`;

export const Display = styled.div`
    font-size: 18px;
    font-weight: 400;
`;
