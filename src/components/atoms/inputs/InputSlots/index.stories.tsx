/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from "@/types/storybook";
import { getLastIndex } from "@/utils/utils";
import { useArgs } from "@storybook/preview-api";
import { fn } from "@storybook/test";
import { sum } from "lodash";
import { CSSProperties, Fragment } from "react";
import {
  InputSlotGroup,
  InputSlotItem,
  InputSlots,
  InputSlotsSeparator,
} from ".";
import { InputSlotsProps } from "./index.types";

type Props = Pick<InputSlotsProps, "value" | "onChange"> & {
  lengths: number[];
};

const meta = {
  component: InputSlots,
  subcomponents: { InputSlotItem, InputSlotsSeparator },
  args: {
    value: "",
    onChange: fn(),
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const EqualLengths = {
  render() {
    const [{ value }, updateArgs] = useArgs<Props>();
    return (
      <InputSlots
        value={value}
        onChange={(value) => {
          updateArgs({ value });
        }}
      >
        {Array<number>(4)
          .fill(4)
          .map((length, idx) => (
            <InputSlotItem key={idx} idx={idx} length={length} />
          ))}
      </InputSlots>
    );
  },
} satisfies Story;

export const DifferentLengths = {
  render() {
    const [{ value }, updateArgs] = useArgs<Props>();
    return (
      <InputSlots
        value={value}
        onChange={(value) => {
          updateArgs({ value });
        }}
      >
        {[2, 4, 1, 5].map((length, idx) => (
          <InputSlotItem key={idx} idx={idx} length={length} />
        ))}
      </InputSlots>
    );
  },
} satisfies Story;

export const AutoFocus = {
  render() {
    const [{ value }, updateArgs] = useArgs<Props>();
    return (
      <InputSlots
        value={value}
        onChange={(value) => {
          updateArgs({ value });
        }}
        autoFocus
      >
        {Array<number>(4)
          .fill(4)
          .map((length, idx) => (
            <InputSlotItem key={idx} idx={idx} length={length} />
          ))}
      </InputSlots>
    );
  },
} satisfies Story;

export const CustomSizes = {
  render() {
    const [{ value }, updateArgs] = useArgs<Props>();
    return (
      <InputSlots
        value={value}
        onChange={(value) => {
          updateArgs({ value });
        }}
      >
        {[2, 4, 1, 5].map((length, idx) => (
          <InputSlotItem
            style={
              {
                "--slot-width": length * 30 + "px",
              } as CSSProperties
            }
            key={idx}
            idx={idx}
            length={length}
          />
        ))}
      </InputSlots>
    );
  },
} satisfies Story;

export const OTP = {
  render() {
    const [{ value }, updateArgs] = useArgs<Props>();
    return (
      <InputSlots
        value={value}
        onChange={(value) => {
          updateArgs({ value });
        }}
      >
        {Array<number>(6)
          .fill(1)
          .map((length, idx) => (
            <InputSlotItem key={idx} idx={idx} length={length} />
          ))}
      </InputSlots>
    );
  },
} satisfies Story;

export const WithSeparator = {
  render() {
    const [{ value }, updateArgs] = useArgs<Props>();
    const slots = Array<number>(4).fill(4);
    return (
      <InputSlots
        value={value}
        onChange={(value) => {
          updateArgs({ value });
        }}
      >
        {slots.map((length, idx) => (
          <>
            <InputSlotItem key={idx} idx={idx} length={length} />
            {getLastIndex(slots) !== idx && <InputSlotsSeparator />}
          </>
        ))}
      </InputSlots>
    );
  },
} satisfies Story;

export const WithCustomSeparator = {
  render() {
    const [{ value }, updateArgs] = useArgs<Props>();
    const slots = Array<number>(4).fill(4);
    return (
      <InputSlots
        value={value}
        onChange={(value) => {
          updateArgs({ value });
        }}
      >
        {slots.map((length, idx) => (
          <>
            <InputSlotItem key={idx} idx={idx} length={length} />
            {getLastIndex(slots) !== idx && <span> / </span>}
          </>
        ))}
      </InputSlots>
    );
  },
} satisfies Story;

export const GroupedSlots = {
  render() {
    const [{ value }, updateArgs] = useArgs<Props>();
    const slots = Array<number[]>(2).fill(Array<number>(3).fill(1));
    return (
      <InputSlots
        value={value}
        onChange={(value) => {
          updateArgs({ value });
        }}
      >
        {slots.map((group, groupIdx, groups) => (
          <Fragment key={groupIdx}>
            <InputSlotGroup>
              {group.map((length, slotIdx) => (
                <InputSlotItem
                  groupItem
                  key={slotIdx}
                  idx={
                    (groupIdx === 0
                      ? 0
                      : sum(
                          groups
                            .slice(0, groupIdx)
                            .map((group) => group.length),
                        )) + slotIdx
                  }
                  length={length}
                />
              ))}
            </InputSlotGroup>
            {getLastIndex(slots) !== groupIdx && <InputSlotsSeparator />}
          </Fragment>
        ))}
      </InputSlots>
    );
  },
} satisfies Story;
