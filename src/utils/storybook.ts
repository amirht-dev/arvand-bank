const union = (...types: string[]) => types.join(" | ");
export const TYPES = {
  union,
  undefinable: (type: string) => union(type, TYPES.primitive.undefined),
  nullable: (type: string) => union(type, TYPES.primitive.null),
  nullish: (type: string) =>
    union(type, TYPES.primitive.undefined, TYPES.primitive.null),
  primitive: {
    string: "string",
    number: "number",
    boolean: "boolean",
    undefined: "undefined",
    null: "null",
    symbol: "symbol",
  },
  react: {
    elements: {
      HTMLInputElement: "HTMLInputElement",
      HTMLDivElement: "HTMLDivElement",
    },
    ReactNode: "ReactNode",
    events: {
      ChangeEventHandler: (genericType: string) =>
        `ChangeEventHandler<${genericType}>`,
    },
  },
};
