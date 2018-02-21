import React from 'react';
import {Transition} from 'react-transition-group';
import {fadeIn, shrink, unshrink} from '../animations';

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

export {
    FadeTransition,
    ShrinkTransition
};
