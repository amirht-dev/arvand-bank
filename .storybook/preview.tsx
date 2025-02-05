import { iranSansX } from "@/lib/fonts";
import { Preview } from "@/types/storybook";
import "../src/styles/globals.css";

const preview: Preview = {
  tags: ["autodocs"],
  beforeAll: () => {
    const fontClasses = ["font-iranSansX", "antialiased", "font-feature-farsi"];

    document.documentElement.classList.add(iranSansX.variable);
    document.body.classList.add(...fontClasses);
    document.getElementById("storybook-root")?.setAttribute("dir", "rtl");
    document.documentElement.setAttribute("lang", "fa");

    return () => {
      document.documentElement.classList.remove(iranSansX.variable);
      document.body.classList.remove(...fontClasses);
      document.getElementById("storybook-root")?.removeAttribute("dir");
      document.documentElement.removeAttribute("lang");
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
