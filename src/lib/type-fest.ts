import type {
  OmitIndexSignature,
  PickIndexSignature,
  Simplify,
} from "type-fest";

export type * from "type-fest";
export type { Merge as SimplifyMerge } from "type-fest";

export type MergeOptions = { simplify: boolean };

export type SimpleMerge<
  Destination,
  Source,
  Options extends MergeOptions = { simplify: true },
> = Options["simplify"] extends true
  ? Simplify<
      {
        [Key in keyof Destination as Key extends keyof Source
          ? never
          : Key]: Destination[Key];
      } & Source
    >
  : {
      [Key in keyof Destination as Key extends keyof Source
        ? never
        : Key]: Destination[Key];
    } & Source;

export type MergeIndexSignatures<
  Destination,
  Source,
  Options extends MergeOptions = { simplify: true },
> = SimpleMerge<
  PickIndexSignature<Destination>,
  PickIndexSignature<Source>,
  Options
>;

export type Merge<
  Destination,
  Source,
  Options extends MergeOptions = { simplify: true },
> = Options["simplify"] extends true
  ? Simplify<
      MergeIndexSignatures<Destination, Source, Options> &
        SimpleMerge<
          OmitIndexSignature<Destination>,
          OmitIndexSignature<Source>,
          Options
        >
    >
  : MergeIndexSignatures<Destination, Source, Options> &
      SimpleMerge<
        OmitIndexSignature<Destination>,
        OmitIndexSignature<Source>,
        Options
      >;

export type DistributiveMerge<
  DestinationUnion,
  Source,
  Options extends MergeOptions = { simplify: true },
> = DestinationUnion extends infer U
  ? Source extends infer S
    ? Merge<U, S, Options>
    : never
  : never;
