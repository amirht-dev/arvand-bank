export const TYPES = {
  union: (...types: string[]) => types.join(" | "),
  arrayOf: (type: string) => `Array<${type}>`,
  undefinable: (type: string) => TYPES.union(type, TYPES.primitive.undefined),
  nullable: (type: string) => TYPES.union(type, TYPES.primitive.null),
  nullish: (type: string) =>
    TYPES.union(type, TYPES.primitive.undefined, TYPES.primitive.null),
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
      ChangeEventHandler: (genericType: string, reactPrefix = true) =>
        `${reactPrefix ? "React." : ""}ChangeEventHandler<${genericType}>`,
    },
  },
};

export const T = TYPES;
