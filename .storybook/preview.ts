import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewport: {
      viewports: {
        customMobile: {
          name: 'Custom Mobile',
          styles: {
            width: '375px',
            height: '600px',
          },
          type: 'mobile',
        },
        customTablet: {
          name: 'Custom Tablet',
          styles: {
            width: '768px',
            height: '1024px',
          },
          type: 'tablet',
        },
        customDesktop: {
          name: 'Custom Desktop',
          styles: {
            width: '1280px',
            height: '800px',
          },
          type: 'desktop',
        },
      },
    },
  },
};

export default preview;
