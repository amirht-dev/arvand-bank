import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  previewBody: (body) => `
    ${body}
    <div id="popover-root"></div>
  `,
  staticDirs: [
    {
      from: "../src/assets/fonts",
      to: "src/assets/fonts",
    },
    "..\\public",
  ],
};
export default config;
