import { iranSansX } from "@/lib/fonts";
import { Preview } from "@/types/storybook";
import "../src/styles/globals.css";

const preview: Preview = {
  tags: ["autodocs"],
  beforeAll: () => {
    const fontClasses = [iranSansX.variable, "font-iranSansX", "antialiased"];

    document.body.classList.add(...fontClasses);
    document.body.setAttribute("dir", "rtl");

    return () => {
      document.body.classList.remove(...fontClasses);
      document.body.removeAttribute("dir");
    };
  },
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
};

export default preview;
