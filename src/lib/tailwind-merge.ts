import {
  extendTailwindMerge,
  type DefaultClassGroupIds,
  type DefaultThemeGroupIds,
} from "tailwind-merge";

type ButtonClassGroupIds = "btn" | "btn-size" | "btn-variant" | "btn-color";

type ClassGroupIds = DefaultClassGroupIds | ButtonClassGroupIds;

export const twMergeConfig: Parameters<
  typeof extendTailwindMerge<ClassGroupIds, DefaultThemeGroupIds>
>[0] = {
  override: {
    theme: {
      colors: [
        {
          primary: [
            "50",
            "100",
            "200",
            "300",
            "400",
            "500",
            "600",
            "700",
            "800",
            "900",
            "950",
          ],
        },
        {
          neutral: [
            "black",
            "white",
            "gray-1",
            "gray-2",
            "gray-3",
            "gray-4",
            "gray-5",
            "gray-6",
            "gray-7",
            "gray-8",
            "gray-9",
            "gray-10",
            "gray-11",
          ],
        },
        {
          state: [
            "error-1",
            "error-2",
            "success-1",
            "success-2",
            "info-1",
            "info-2",
            "warning-1",
            "warning-2",
            "chart",
          ],
        },
        "transparent",
      ],
    },
    classGroups: {
      "font-family": ["font-iranSansX"],
      "font-size": [
        {
          text: [
            "display-1",
            "display-2",
            "heading-1",
            "heading-2",
            "heading-3",
            "heading-4",
            "heading-5",
            "heading-6",
            "body-1",
            "body-2",
            "body-3",
            "body-4",
            "body-5",
            "caption-1",
            "caption-2",
            "button-1",
            "button-2",
            "overline-1",
            "overline-2",
          ],
        },
      ],
    },
  },
  extend: {
    classGroups: {
      shadow: [{ shadow: [""] }],
      animate: [{ animate: [{ "path-draw": ["", "reverse"] }] }],
    },
  },
};

export const twMerge = extendTailwindMerge(twMergeConfig);
