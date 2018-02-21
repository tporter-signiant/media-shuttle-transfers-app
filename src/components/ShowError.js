import React from 'react';
import styled from 'styled-components';

const ErrorMessage = styled.div`
    text-align: center;
    color: #d44950;
    font-size: 24px;
    padding: 50px;
`;

const ShowError = ({message}) => (
    <ErrorMessage>{message}</ErrorMessage>
);

export default ShowError;
