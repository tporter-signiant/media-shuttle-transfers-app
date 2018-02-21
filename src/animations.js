import {TweenMax, Power1} from 'gsap';

const fadeIn = (duration) => (node) => TweenMax.from(node, duration, {opacity: 0, ease: Power1.easeIn});

const unshrink = (duration) => (node) =>
    TweenMax.from(node, duration, {opacity: 0, height: 0, ease: Power1.easeIn});

const shrink = (duration) => (node) =>
    TweenMax.to(node, duration, {opacity: 0, height: 0, scale: 0, ease: Power1.easeIn});

export {
    fadeIn,
    unshrink,
    shrink
};
