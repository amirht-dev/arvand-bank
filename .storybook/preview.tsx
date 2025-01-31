import { iranSansX } from "@/lib/fonts";
import { Preview } from "@/types/storybook";
import "../src/styles/globals.css";

const preview: Preview = {
  tags: ["autodocs"],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    nextjs: {
      appDirectory: true,
    },
  },
  decorators: [
    (Story) => (
      <div
        dir="rtl "
        className={`${iranSansX.variable} font-iranSansX antialiased`}
      >
        {Story()}
      </div>
    ),
  ],
};

export default preview;
