import Chip from "@/components/atoms/Chip";
import { FileListCheck_Outline } from "@/components/atoms/icons/Files/FileListCheck";
import { DollarSendCircle_Outline } from "@/components/atoms/icons/Money&Payment/DollarSendCircle";
import { MenuHorizontalCircle_Outline } from "@/components/atoms/icons/Mwnu/MenuHorizontalCircle";
import { Eye_Outline } from "@/components/atoms/icons/Security/Eye";
import { EyeSlash_Outline } from "@/components/atoms/icons/Security/EyeSlash";
import Logo from "@/components/atoms/logos/Logo";
import {
  Toggler,
  TogglerInvisible,
  TogglerTrigger,
  TogglerVisible,
} from "@/components/utils/Toggler";
import { tv } from "@/lib/tv";
import { formatPrice } from "@/utils/utils";
import chunk from "lodash/chunk";
import { forwardRef } from "react";
import { CardProps } from "./index.types";

const cardVariants = tv({
  slots: {
    root: "w-[344px] rounded-2xl border overflow-hidden",
    body: "bg-[url(/images/card-bg.png)] bg-cover bg-center p-6",
    numberWrapper: "flex items-center justify-between py-2",
    number: "text-heading-6",
    priceWrapper: "flex items-center justify-between mt-6",
    footer: "flex divide-x-[0.5px] divide-x-reverse divide-neutral-white",
    button: "flex-1 flex items-center justify-center gap-2 py-2.5",
  },
  variants: {
    disabled: {
      true: {
        root: "border border-neutral-gray-8",
        number: "text-neutral-gray-6",
        priceWrapper: "hidden",
        button: "bg-neutral-gray-8 text-neutral-gray-5 cursor-not-allowed",
      },
      false: {
        root: "border-primary-500",
        number: "text-primary-800",
        priceWrapper: "text-primary-500",
        button: "bg-primary-700 text-neutral-white",
      },
    },
  },
  defaultVariants: {
    disabled: false,
  },
});

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ disabled = false }, ref) => {
    const cns = cardVariants({ disabled });
    return (
      <div className={cns.root()} ref={ref}>
        <div className={cns.body()}>
          <div className={cns.numberWrapper()}>
            <Logo className="[--size:24px]" disabled={disabled} />

            <h6 className={cns.number()} dir="ltr">
              {chunk("۲۳۹۴۱۴۷۸۳۲۵۶۹۰۶۵".split(""), 4)
                .map((seg) => seg.join(""))
                .join(" ")}
            </h6>
          </div>

          {disabled ? (
            <div className="mt-6">
              <Chip color="error" className="mx-auto block">
                غیرفعال
              </Chip>
            </div>
          ) : (
            <div className={cns.priceWrapper()}>
              <Toggler>
                <div className="flex items-center gap-2">
                  <h5 className="text-heading-5">موجودی</h5>
                  <TogglerTrigger>
                    <TogglerVisible>
                      <EyeSlash_Outline className="size-6" />
                    </TogglerVisible>
                    <TogglerInvisible>
                      <Eye_Outline className="size-6" />
                    </TogglerInvisible>
                  </TogglerTrigger>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-heading-4">
                    <TogglerVisible>
                      {formatPrice(178_087_000, {
                        style: undefined,
                      })}
                    </TogglerVisible>
                    <TogglerInvisible>*********</TogglerInvisible>
                  </span>

                  <span className="text-heading-6">ریال</span>
                </div>
              </Toggler>
            </div>
          )}

          <div className=""></div>
        </div>

        <div className={cns.footer()}>
          <button className={cns.button()}>
            <DollarSendCircle_Outline className="size-5" />
            <span className="text-button-1">انتقال</span>
          </button>
          <button className={cns.button()}>
            <FileListCheck_Outline className="size-5" />
            <span className="text-button-1">قبض</span>
          </button>
          <button className={cns.button()}>
            <MenuHorizontalCircle_Outline className="size-5" />
            <span className="text-button-1">سایر</span>
          </button>
        </div>
      </div>
    );
  },
);
Card.displayName = "Card";

export default Card;
