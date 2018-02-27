import React from 'react';
import PropTypes from 'prop-types';
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

ShowError.propTypes = {
    message: PropTypes.string
};

export default ShowError;
