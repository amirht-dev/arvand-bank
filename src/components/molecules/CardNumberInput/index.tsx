"use client";

import Autocomplete from "@/components/atoms/Autocomplete";
import { DefaultOption } from "@/components/atoms/Autocomplete/index.types";
import { AngleDown_Outline } from "@/components/atoms/icons/Arrows/AngleDown";
import {
  InputSlotItem,
  InputSlots,
  InputSlotsSeparator,
} from "@/components/atoms/inputs/InputSlots";
import { operator } from "@/constants";
import { getLastIndex, splitByLengths } from "@/utils/utils";
import clsx from "clsx";
import range from "lodash/range";
import Image from "next/image";

const CardNumberInput = () => {
  return (
    <Autocomplete<DefaultOption & { operator: keyof typeof operator }>
      options={[
        {
          value: Array(16).fill("9").join(""),
          label: Array(16).fill("9").join(""),
          operator: "pasargad",
        },
        {
          value: Array(16).fill("1").join(""),
          label: Array(16).fill("1").join(""),
          operator: "mellat",
        },
      ]}
      renderInput={(props, { toggleOpen, open }) => (
        <div className="flex w-fit gap-2" dir="ltr">
          <button
            onClickCapture={toggleOpen}
            className={clsx(
              "rounded-lg border border-neutral-gray-7 p-2 transition-all",
              open ? "text-neutral-gray-5" : "text-neutral-gray-7",
            )}
          >
            <AngleDown_Outline
              className={clsx("transition-all", open && "rotate-180")}
            />
          </button>
          <InputSlots {...props}>
            {range(0, 4).map((idx, _, array) => (
              <>
                <InputSlotItem idx={idx} key={idx} length={4} />
                {getLastIndex(array) !== idx && <InputSlotsSeparator />}
              </>
            ))}
          </InputSlots>
        </div>
      )}
      renderOption={({ label, value, operator: operatorId }) => (
        <div className="flex w-full items-center gap-2" key={value} dir="ltr">
          <Image
            src={operator[operatorId]}
            alt={operatorId}
            width={16}
            height={16}
          />
          {splitByLengths(label, [4, 4, 4, 4]).join(" ")}
        </div>
      )}
    />
  );
};

export default CardNumberInput;
