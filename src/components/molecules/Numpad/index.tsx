"use client";

import IconButton from "@/components/atoms/buttons/IconButton";
import { DeleteLeft_Outline } from "@/components/atoms/icons/Communication/DeleteLeft";
import { Keyboard_Outline } from "@/components/atoms/icons/Devices&Hardware/Keyboard";
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "@/components/atoms/Popover";
import { range, shuffle } from "lodash";
import { NumpadProps } from "./index.types";

const Numpad = ({ onClick, onDelete }: NumpadProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <IconButton>
          <Keyboard_Outline className="size-6" />
        </IconButton>
      </PopoverTrigger>

      <PopoverContent className="flex flex-col gap-1.5 rounded-lg border border-neutral-gray-9 p-2">
        <PopoverClose className="size-4 self-end" />

        <div className="text-caption-2 text-neutral-gray-2">صفحه کلید امن</div>

        <div className="grid grid-cols-3 text-caption-1 text-neutral-gray-2">
          {shuffle(range(0, 10)).map((num, idx) => (
            <button
              key={num}
              className="flex size-6 items-center justify-center"
              style={{ order: idx }}
              onClick={() => onClick?.(num)}
            >
              {num}
            </button>
          ))}

          <button className="order-8" onClick={onDelete}>
            <DeleteLeft_Outline className="size-5" />
          </button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default Numpad;
