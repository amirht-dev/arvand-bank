import { iranSansX } from "@/lib/fonts";
import { Preview } from "@/types/storybook";
import { GLOBALS_UPDATED } from "@storybook/core/core-events";
import { addons, useGlobals } from "@storybook/preview-api";
import "../src/styles/globals.css";

const preview: Preview = {
  tags: ["autodocs"],
  beforeAll: () => {
    const removeFont = addFont();
    return () => {
      removeFont();
    };
  },
  globalTypes: {
    direction: {
      toolbar: {
        title: "Direction",
        items: ["rtl", "ltr"],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    direction: "rtl",
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
  decorators: [
    (Story, { globals }) => {
      createRoot("popover");

      // createRoot("popover", globals.direction);
      return <div dir={globals.direction}>{Story()}</div>;
    },
  ],
};

export default preview;

function createRoot(id: string) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [globals] = useGlobals();

  const root = document.createElement("div");
  root.id = `${id}-root`;
  root.setAttribute("dir", globals.direction);

  document.body?.appendChild(root);

  addons.getChannel().on(GLOBALS_UPDATED, () => {
    root.remove();
  });

  // return { remove: () => document.body?.removeChild(root) };
}

function addClass(element: HTMLElement | null, ...classes: string[]) {
  element?.classList.add(...classes);

  return () => element?.classList.remove(...classes);
}

function addFont() {
  const removeFontVariableClass = addClass(
    document.documentElement,
    iranSansX.variable,
  );
  const removeFontClasses = addClass(
    document.body,
    "font-iranSansX",
    "antialiased",
    "font-feature-farsi",
  );

  return () => {
    removeFontVariableClass();
    removeFontClasses();
  };
}
