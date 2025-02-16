import type { Meta, StoryObj } from "@/types/storybook";
import { range } from "lodash";
import Autocomplete from ".";
import { Bank_Outline } from "../icons/Buildings/Bank";
import { AutocompleteProps, Option } from "./index.types";

const defaultMapCb = (num: number) => ({
  label: `Option ${num}`,
  value: `option_${num}`,
});

function genOptions(mapCb: (num: number) => Option = defaultMapCb, count = 10) {
  return range(1, count).map(mapCb);
}

const meta = {
  component: Autocomplete,
} satisfies Meta<AutocompleteProps>;

export default meta;

type Story<T = typeof meta> = StoryObj<T>;

export const Options = {
  args: {
    options: genOptions(),
  },
} satisfies Story;

export const Group = {
  args: {
    options: [
      {
        group: "Heading 1",
        options: genOptions(),
      },
      {
        group: "Heading 2",
        options: genOptions(),
      },
    ],
  },
} satisfies Story;

export const CustomGroup = {
  render(args) {
    return (
      <Autocomplete
        {...args}
        options={[
          {
            group: "Heading 1",
            icon: <Bank_Outline />,
            options: genOptions(),
          },
          {
            group: "Heading 2",
            icon: <Bank_Outline />,
            options: genOptions(),
          },
        ]}
        commandGroupProps={(group) => ({
          heading: (
            <div className="flex items-center gap-2">
              {group.icon}

              {group.group}
            </div>
          ),
        })}
      />
    );
  },
} satisfies Story<object>;
