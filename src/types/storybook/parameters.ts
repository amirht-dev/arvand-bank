import type { Merge } from "@/lib/type-fest";
import type { PixelSize } from "../utils";

export type HighlightEmitPayload = {
  elements: string[];
  color?: string;
  style?: "dotted" | "dashed" | "solid" | "double";
};

type Viewport = {
  /**
   * @description Name for the viewport
   */
  name: string;
  /**
   * @description Sets Inline styles to be applied to the story
   */
  styles: { width: PixelSize; height: PixelSize };
  /**
   * @description Type of the device
   */
  type: "desktop" | "mobile" | "tablet";
};

type StorySortConfig = {
  /**
   * @description Whether to include the story name in the sorting algorithm.
   *
   * @default false
   */
  includeNames?: boolean;
  /**
   * @description The locale to use when sorting stories. Defaults to your system locale.
   */
  locales?: string;
  /**
   * @description The sorting method to use. Defaults to alphabetical.
   *
   * alphabetical: Sort stories alphabetically by name.
   *
   * alphabetical-by-kind: Sort stories alphabetically by kind, then by name.
   *
   * custom: Use a custom sorting function.
   */
  method?: "alphabetical" | "alphabetical-by-kind" | "custom";
  /**
   * @description Stories in the specified order will be displayed first, in the order specified. All other stories will be displayed after, in alphabetical order. The order array can accept a nested array to sort 2nd-level story kinds, e.g. ['Intro', 'Pages', ['Home', 'Login', 'Admin'], 'Components'].
   */
  order?: string[];
};

type Story = {
  id: string;
  importPath: string;
  name: string;
  title: string;
};

type StorySortFn = (a: Story, b: Story) => number;

interface NextJSParameter {
  appDirectory?: boolean;
  router?: {
    pathname?: string;
    asPath?: string;
    query?: Record<string, string>;
  };
  navigation?: {
    pathname?: string;
    query?: Record<string, string>;
    /**
     * @default []
     */
    segments?: Array<string | [string, string]>;
  };
}

interface ReactParameter {
  rsc?: boolean;
}

type LayoutParameter = "centered" | "fullscreen" | "padded";

interface ControlsParameter {
  disable?: boolean;
  matchers?: {
    /**
     * @description Will display a color picker UI for the args that match it
     */
    color?: RegExp;
    /**
     * @description	Will display a date picker UI for the args that match it
     */
    date?: RegExp;
    /**
     * @description
     * @default false
     */
  };
  /**
   * @description Show the full documentation for each property in the Controls addon panel, including the description and default value.
   */
  expanded?: boolean;
  /**
   * @description Specify preset color swatches for the color picker control. The color value may be any valid CSS color.
   */
  presetColors?: ({ color: string; title: string } | string)[];
  /**
   * @description Specifies which properties to include in the Controls addon panel. Any properties whose names don't match the regex or are not part of the array will be left out.
   */
  include?: string[] | RegExp;
  /**
   * @description Specifies which properties to exclude from the Controls addon panel. Any properties whose names match the regex or are part of the array will be left out.
   */
  exclude?: string[] | RegExp;
  /**
   * @description Specifies how the controls are sorted.
   *
   * none: Unsorted, displayed in the same order the arg types are processed in
   *
   * alpha: Sorted alphabetically, by the arg type's name
   *
   * requiredFirst: Same as alpha, with any required arg types displayed first
   */
  sort?: "none" | "alpha" | "requiredFirst";
  /**
   * @description Disable the ability to create or edit stories from the Controls panel.
   *
   * @type {boolean}
   *
   * @default false
   */
  disableSaveFromUI?: "none" | "alpha" | "requiredFirst";
}

interface OptionsParameter {
  /**
   * @description Specifies the order in which stories are displayed in the Storybook UI. When specifying a custom sorting function, the function behaves like a typical JavaScript sorting function. It accepts two stories to compare and returns a number.
   */
  storySort?: StorySortConfig | StorySortFn;
}

interface TestParameter {
  /**
   * @description Similar to Vitest, it will call .mockClear() on all spies created with fn() from @storybook/test when a story unmounts. This will clear mock history, but not reset its implementation to the default one.
   * @default false
   */
  clearMocks?: boolean;
  /**
   * @description Similar to Vitest, it will call .mockReset() on all spies created with fn() from @storybook/test when a story unmounts. This will clear mock history and reset its implementation to an empty function (will return undefined).
   * @default false
   */
  mockReset?: boolean;
  /**
   * @description Similar to Vitest, it will call .restoreMocks() on all spies created with fn() from @storybook/test when a story unmounts. This will clear mock history and reset its implementation to the original one.
   * @default true
   */
  restoreMocks?: boolean;
  /**
   * @description Unhandled errors might cause false positive assertions. Setting this to true will prevent the play function from failing and showing a warning when unhandled errors are thrown during execution.
   * @default false
   */
  dangerouslyIgnoreUnhandledErrors?: boolean;
}

interface ActionsParameter {
  /**
   * @description Create actions for each arg that matches the regex. Please note the significant limitations of this approach, as described above.
   */
  argTypesRegex?: string;
  disable?: boolean;
  /**
   * @description Binds a standard HTML event handler to the outermost HTML element rendered by your component and triggers an action when the event is called for a given selector. The format is <eventname> <selector>. The selector is optional; it defaults to all elements.
   */
  handles?: string[];
}

interface BackgroundsParameter {
  /**
   * @description Default background color. Must match the name property of one of the available colors.
   */
  default?: string;
  /**
   * @description Available background colors.
   */
  values?: { name: string; value: string }[];
  disable?: boolean;
  grid?: {
    /**
     * @description Disable the grid.
     */
    disable?: boolean;
    /**
     * @description Specify the size of the minor grid lines.
     * @default 5
     */
    cellAmount?: number;
    /**
     * @description Specify the size of the major grid lines.
     * @default 20
     */
    cellSize?: number;
    /**
     * @description Horizontal offset of the grid.
     * @default 0 if story layout is 'fullscreen'; 16 if story layout is 'padded'
     */
    offsetX?: number;
    /**
     * @description Vertical offset of the grid.
     * @default 0 if story layout is 'fullscreen'; 16 if story layout is 'padded'
     */
    offsetY?: number;
    /**
     * @description Opacity of the grid lines.
     * @default 0.5
     */
    opacity?: number;
  };
}

interface HighlightParameter {
  disable?: boolean;
}

interface MeasureParameter {
  disable?: boolean;
}

interface OutlineParameter {
  disable?: boolean;
}

interface ViewportParameter {
  disable?: boolean;
  /**
   * @description Specifies the default viewport used when viewing a story. Must match a key in the viewports
   * @default 'responsive'
   */
  defaultViewport?: string;
  /**
   * @description Specifies the default orientation used when viewing a story.
   * @default 'portrait'
   */
  defaultOrientation?: "portrait" | "landscape";
  /**
   * @description Specify the available viewports.
   */
  viewports?: Record<string, Viewport>;
}

export interface BaseParameters {
  nextjs?: NextJSParameter;
  /**
   * @link https://storybook.js.org/docs/essentials/controls
   */
  controls?: ControlsParameter;
  react?: ReactParameter;
  /**
   * @default 'padded'
   *
   * @description Specifies how the canvas should lay out the story.
   *
   * centered: Center the story within the canvas
   * padded: (default) Add padding to the story
   * fullscreen: Show the story as-is, without padding
   * @link https://storybook.js.org/docs/api/parameters#layout
   */
  layout?: LayoutParameter;
  /**
   * @link https://storybook.js.org/docs/api/parameters#test
   */
  test?: TestParameter;
  /**
   * @link https://storybook.js.org/docs/essentials/actions
   */
  actions?: ActionsParameter;
  /**
   * @link https://storybook.js.org/docs/essentials/background
   */
  backgrounds?: BackgroundsParameter;
  highlight?: HighlightParameter;
  measure?: MeasureParameter;
  outline?: OutlineParameter;
  viewport?: ViewportParameter;
  [Param: string]: unknown;
}

export interface ProjectParameters extends BaseParameters {
  /**
   * @description The options parameter can only be applied at the project level.
   * @link https://storybook.js.org/docs/api/parameters#options
   */
  options?: OptionsParameter;
}

export type MetaParameters<TParameters> = Merge<BaseParameters, TParameters>;

export type StoryObjParameters<TParameters> = Merge<
  BaseParameters,
  TParameters
>;
