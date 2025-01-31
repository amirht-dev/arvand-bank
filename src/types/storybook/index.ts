import type { DistributiveMerge, EmptyObject, Merge } from "@/lib/type-fest";
import type {
  Args,
  Meta as NativeMeta,
  Preview as NativePreview,
  StoryObj as NativeStoryObj,
} from "@storybook/react";
import type { ComponentProps, ComponentType } from "react";
import preview from "~/.storybook/preview";
import type { LooseString, OverrideProps } from "../utils";
import type {
  MetaParameters,
  ProjectParameters,
  StoryObjParameters,
} from "./parameters";

type PreviewType = typeof preview;

type PreviewArgs = PreviewType extends { args: infer TArgs } ? TArgs : never;

type Tags = LooseString<"test" | "dev" | "autodocs">;

export type Preview = Merge<
  NativePreview,
  {
    /**
     * @description When specifying parameters, they are merged together in order of increasing specificity:
     *
     * 1- Project (global) parameters
     *
     * 2- Meta (component) parameters
     *
     * 3- Story parameters
     *
     * Parameters are merged, so objects are deep-merged, but arrays and other properties are overwritten.
     *
     * @link https://storybook.js.org/docs/api/parameters#parameter-inheritance
     */
    parameters?: ProjectParameters;
    tags?: Tags[];
  }
>;

export type Meta<
  TCmpOrArgs = Args,
  TParameters extends Record<string, unknown> = EmptyObject,
> = OverrideProps<
  NativeMeta<
    PreviewArgs extends never
      ? TCmpOrArgs
      : OverrideProps<
          PreviewArgs,
          TCmpOrArgs extends ComponentType<unknown>
            ? ComponentProps<TCmpOrArgs>
            : TCmpOrArgs
        >
  >,
  {
    tags?: Tags[];
    parameters?: MetaParameters<TParameters>;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    subcomponents?: Record<string, ComponentType<any>> | undefined;
  }
>;

export type StoryObj<
  TMetaOrCmpOrArgs = Args,
  TParameters extends Record<string, unknown> = EmptyObject,
> = DistributiveMerge<
  NativeStoryObj<TMetaOrCmpOrArgs>,
  {
    parameters?: StoryObjParameters<TParameters>;
  }
>;
