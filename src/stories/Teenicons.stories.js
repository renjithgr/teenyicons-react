import React from 'react';
import { ThreeSixty } from '../index';
import { ABTesting } from '../index';

export default { title: 'Teenyicons' };

export const ThreeSixtyIcon = (args) => <ThreeSixty {...args} />;
ThreeSixtyIcon.storyName = "360˚";
ThreeSixtyIcon.args = { size: 15 };

export const ABTestingIcon = () => <ABTesting />;
ABTestingIcon.storyName = "AB Testing";