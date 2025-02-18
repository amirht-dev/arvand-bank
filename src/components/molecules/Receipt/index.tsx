"use client";

import Button from "@/components/atoms/buttons/Button";
import Divider from "@/components/atoms/Divider";
import { Share_Outline } from "@/components/atoms/icons/Communication/Share";
import { Download_Outline } from "@/components/atoms/icons/Files/Download";
import { CheckCircle_Bold } from "@/components/atoms/icons/general/CheckCircle";
import { getScreenshot } from "@/utils/clientHelpers";
import { Fragment, PropsWithChildren, useRef } from "react";
import { ReceiptItemProps } from "./index.types";

const Receipt = ({ children }: PropsWithChildren) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleTakeScreenshot = () => {
    if (!ref.current) return;

    getScreenshot(ref.current, {
      ignoreElements: (element) => element.nodeName === "BUTTON",
    });
  };

  return (
    <div
      className="mx-auto mt-8 w-[512px] rounded-3xl border border-neutral-gray-9 p-6"
      ref={ref}
    >
      <div className="mx-auto flex flex-col items-center gap-2">
        <CheckCircle_Bold className="size-12 text-state-success-1 [&>path]:animate-path-draw" />
        <span className="text-body-1 text-state-success-1">پرداخت موفق</span>
      </div>

      <Divider className="my-8" />

      <div className="grid grid-cols-2 gap-x-2 gap-y-6 text-body-2 text-neutral-gray-1">
        {children}

        <Button
          kind="twotone"
          prefixIcon={<Download_Outline />}
          className="mt-2"
          onClick={handleTakeScreenshot}
        >
          دانلود رسید
        </Button>
        <Button kind="twotone" prefixIcon={<Share_Outline />} className="mt-2">
          اشتراک گذاری{" "}
        </Button>
      </div>
    </div>
  );
};

const ReceiptItem = ({ children, label }: ReceiptItemProps) => {
  return (
    <Fragment>
      <span>{label}</span>
      <span>{children}</span>
    </Fragment>
  );
};

export { Receipt, ReceiptItem };
