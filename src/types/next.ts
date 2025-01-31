import type { Metadata, ResolvingMetadata } from "next";
import type { TemplateString } from "next/dist/lib/metadata/types/metadata-types";
import { NextRequest, NextResponse } from "next/server";
import type { EmptyObject, IsEqual } from "type-fest";
import type {
  If,
  LooseString,
  OneOrMore,
  OverrideProps,
  PromiseAble,
  UnionOmit,
} from "./utils";

type Params = string | [string] | [[string]];

// prettier-ignore
type RouteParams<TParams extends Params> = {
  [Param in TParams as Param extends 
  (infer P extends string) | [infer P extends string]
    ? P
    : never]: Param extends string ? string : string[];
} & {
  [CAParam in TParams as CAParam extends [[infer P extends string]]
    ? P
    : never]?: string[];
};

declare global {
  type LayoutMetadata = Metadata;
  type PageMetadata = OverrideProps<
    Metadata,
    { title?: string | UnionOmit<TemplateString, "template"> }
  >;
  // functions

  type GenerateMetadataProps<TParams extends Params = never> = {
    params: RouteParams<TParams>;
    searchParams: Record<string, OneOrMore<string>>;
  };

  type GenerateStaticParams<
    TParams extends Params,
    TParentParams extends Params = never,
  > = (
    ...args: TParentParams extends never
      ? []
      : [params: { params: RouteParams<TParentParams> }]
  ) => PromiseAble<Array<RouteParams<TParams>>>;

  type LayoutGenerateMetadata<TParams extends Params = never> = (
    props: GenerateMetadataProps<TParams>,
    parent: ResolvingMetadata,
  ) => PromiseAble<LayoutMetadata>;

  type PageGenerateMetadata<TParams extends Params = never> = (
    props: GenerateMetadataProps<TParams>,
    parent: ResolvingMetadata,
  ) => PromiseAble<PageMetadata>;

  type NextLayoutProps<TSlots extends string = never> = Readonly<
    {
      children: React.ReactNode;
    } & {
      [Slot in TSlots]: React.ReactNode;
    }
  >;

  type NextLayout<TSlots extends string = never> = React.FC<
    NextLayoutProps<TSlots>
  >;

  type NextPageProps<
    TParams extends Params = never,
    TSearchParams extends string = never,
  > = If<
    IsEqual<TParams | TSearchParams, EmptyObject>,
    never,
    Omit<
      {
        params: Promise<RouteParams<TParams>>;
        searchParams: Promise<
          Record<LooseString<TSearchParams>, string | string[] | undefined>
        >;
      },
      | If<IsEqual<TParams, never>, "params", never>
      | If<IsEqual<TSearchParams, never>, "searchParams", never>
    >
  >;

  type NextPage<
    TParams extends Params = "",
    TSearchParams extends string = "",
  > = React.FC<NextPageProps<TParams, TSearchParams>>;

  type NextNotFound = React.FC;

  type NextLoading = React.FC;

  type NextErrorProps = {
    error: Error & { digest?: string };
    reset: () => void;
  };

  type NextError = React.FC<NextErrorProps>;

  type RouteHandler<TParams extends Params = never> = (
    request: NextRequest,
    context: TParams extends never ? never : { params: RouteParams<TParams> },
  ) => PromiseAble<NextResponse | Response>;
}
