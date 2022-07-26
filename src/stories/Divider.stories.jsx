import React from 'react';


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
export const DividerComponent = Template.bind({});
