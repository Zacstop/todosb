import type { Meta, StoryObj } from '@storybook/react';

import { FirstSection } from './FirstSection';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'firstSection/FirstSection',
  component: FirstSection,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof FirstSection>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    title: "MediXForm Data Management",
    imageSrc: "https://s3-alpha-sig.figma.com/img/647e/d1d8/1ae1ef23b4330f455220d3d2abb32a47?Expires=1698624000&Signature=qC2vKiyU60nPdeh3Ymmr1WjPNsQyDlJPu2IF~856mbPmYiS2nIPchNTnCr064IvWMgQUS6hjszBaIHxKW5i1NrReQirz8igryxkGllOysfeahESv-gKK164AAwpaebj-cP~Il2YViSB-OtQSSga3pDe3D6fjv0DTrYB2mCyA-g3hBd9bTnNNt2br7ZDhAilKmRYXX6WbOn9OwBZVesoE354bTI6nuNpB0GKmSBOoso8geG7dilVZWSsKTGITejDNAfqTanX7oe8bSvnOogl67R6Bb~fJWkGjXPtzMC472vMsjHoMX1pZw-rTdOvYr3V0d0tjF839-OoBqS-2cRw28A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
};
