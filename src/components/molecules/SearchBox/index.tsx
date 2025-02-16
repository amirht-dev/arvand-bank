"use client";

import Autocomplete from "@/components/atoms/Autocomplete";
import {
  GroupOptions,
  Option,
} from "@/components/atoms/Autocomplete/index.types";
import { Bank_Outline } from "@/components/atoms/icons/Buildings/Bank";
import { TimePast_Outline } from "@/components/atoms/icons/Date&Time/TimePast";
import { Search_Outline } from "@/components/atoms/icons/general/Search";
import { ReactNode, useState } from "react";

type SearchOption = Option & { icon: ReactNode };

function SearchBox() {
  const [value, setValue] = useState<string | undefined>(undefined);
  return (
    <Autocomplete<
      SearchOption,
      GroupOptions<SearchOption> & {
        icon: ReactNode;
      }
    >
      value={value}
      onChange={setValue}
      openOnInputFocus
      filterKeys={["label", "value"]}
      options={[
        {
          group: "جستجو اخیر",
          icon: <TimePast_Outline className="size-4" />,
          options: [
            {
              label: "تغییر رمز",
              value: "change-password",
              icon: <Bank_Outline className="size-4" />,
            },
            {
              label: "نرخ بهره",
              value: "interest-rate",
              icon: <Bank_Outline className="size-4" />,
            },
            {
              label: "شبا",
              value: "shaba",
              icon: <Bank_Outline className="size-4" />,
            },
          ],
        },
        {
          group: "پیشنهادات",
          icon: <Bank_Outline className="size-4" />,
          options: [
            {
              label: "محاسبه شماره شبا",
              value: "calculate-shaba",
              icon: <Bank_Outline className="size-4" />,
            },
            {
              label: "تغییر رمز دوم",
              value: "change-second-password",
              icon: <Bank_Outline className="size-4" />,
            },
            {
              label: "ساعت کاری",
              value: "business time",
              icon: <Bank_Outline className="size-4" />,
            },
          ],
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
      renderOption={(o) => (
        <div className="flex w-full items-center justify-between">
          {o.label}
          {o.icon}
        </div>
      )}
      inputProps={{
        className: "ms-6 w-[230px]",
        size: "sm",
        prefixIcon: <Search_Outline />,
        placeholder: "جستجو",
      }}
    />
  );
}

export default SearchBox;
