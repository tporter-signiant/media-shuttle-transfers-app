import React from 'react';
import PropTypes from 'prop-types';
import {Transition} from 'react-transition-group';
import {fadeIn, shrink, unshrink} from '../animations';

const propTypes = {
    children: PropTypes.element.isRequired,
    duration: PropTypes.number
};

const defaultProps = {
    duration: 500
};


const FadeTransition = ({children, duration, ...props}) => (
    <Transition
        {...props}
        timeout={duration}
        appear={true}
        onEntering={fadeIn(duration / 1000)}
    >
        {children}
    </Transition>
);

FadeTransition.propTypes = propTypes;
FadeTransition.defaultProps = defaultProps;

const ShrinkTransition = ({children, duration, ...props}) => (
    <Transition
        {...props}
        timeout={duration}
        appear={true}
        onEntering={unshrink(duration / 1000)}
        onExiting={shrink(duration / 1000)}
    >
        {children}
    </Transition>
);

ShrinkTransition.propTypes = propTypes;
ShrinkTransition.defaultProps = defaultProps;

export {
    FadeTransition,
    ShrinkTransition
};
