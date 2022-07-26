import React from 'react';
import * as Icon from 'react-bootstrap-icons';

import { Divider } from './Divider';

export default {
  title: 'Example/Divider',
  component: Divider,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};


const Template = (args) => <Divider {...args} />;

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Alignment = Template.bind({});
Alignment.args = {
  alignment: 'start',
  weight: 'regular',
  line: 'solid',
  label: 'Start',
  onClick: undefined,
};

export const Line = Template.bind({});
Line.args = {
  alignment: 'center',
  weight: 'regular',
  line: 'dashed',
  label: 'Line',
  onClick: undefined,
};

export const Weight = Template.bind({});
Weight.args = {
  alignment: 'center',
  weight: 'heavy',
  line: 'solid',
  label: 'Weight',
  onClick: undefined,
};

export const LabelIcon = Template.bind({});
LabelIcon.args = {
  alignment: 'center',
  weight: 'heavy',
  line: 'solid',
  label: <Icon.Wind />,
  onClick: undefined,
};