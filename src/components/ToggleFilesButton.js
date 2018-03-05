import styled from "styled-components";
import React from "react";

const ClickableText = styled.span`
    color: #68bbe1;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`;

class ToggleFilesButton extends React.Component {
    render() {
        return (
            <ClickableText onClick={this.props.onClick}>
                {this.props.shown ? 'Hide Files' : 'Show Files'}
            </ClickableText>
        );
    }
}

export default ToggleFilesButton;