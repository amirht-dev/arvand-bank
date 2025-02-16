import {
  Breadcrumb,
  BreadcrumbIcon,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/atoms/Breadcrumb";
import Button from "@/components/atoms/buttons/Button";
import { ClipboardListCheck_Outline } from "@/components/atoms/icons/Documents/ClipboardListCheck";
import { CoinCardTransfer_Outline } from "@/components/atoms/icons/Money&Payment/CoinCardTransfer";
import { CreditCartChange_Outline } from "@/components/atoms/icons/Money&Payment/CreditCartChange";
import { DollarSendCircle_Outline } from "@/components/atoms/icons/Money&Payment/DollarSendCircle";
import { PageTitle, PageTitleIcon } from "@/components/molecules/PageTitle";
import { operator } from "@/constants";
import { formatPrice, splitByLengths } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";

export default function PaymentTransferConfirm() {
  return (
    <>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbIcon>
              <CoinCardTransfer_Outline />
            </BreadcrumbIcon>
            پرداخت
          </BreadcrumbItem>

          <BreadcrumbSeparator />

          <BreadcrumbItem>
            <BreadcrumbIcon>
              <CreditCartChange_Outline />
            </BreadcrumbIcon>
            انتقال وجه
          </BreadcrumbItem>

          <BreadcrumbSeparator />

          <BreadcrumbItem>
            <BreadcrumbIcon>
              <CreditCartChange_Outline />
            </BreadcrumbIcon>
            کارت
          </BreadcrumbItem>

          <BreadcrumbSeparator />

          <BreadcrumbItem>
            <BreadcrumbPage>
              <BreadcrumbIcon>
                <ClipboardListCheck_Outline />
              </BreadcrumbIcon>
              تایید اطلاعات
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <PageTitle className="mt-4">
        <PageTitleIcon>
          <CreditCartChange_Outline />
        </PageTitleIcon>
        انتقال وجه
      </PageTitle>

      <div className="mt-8 flex items-start gap-4">
        <div className="grid flex-1 grid-cols-2 gap-y-6 rounded-2xl border border-neutral-gray-9 p-6 text-body-2 text-neutral-gray-1">
          <>
            <span>شماره کارت مبدا</span>
            <span>
              {splitByLengths(
                Array<string>(16).fill("1").join(""),
                [4, 4, 4, 4],
              ).join(" ")}
            </span>
          </>

          <>
            <span>شماره کارت مقصد</span>
            <span className="flex items-center gap-2">
              <Image
                src={operator.mellat}
                alt="mellat bank"
                width={20}
                height={20}
              />
              {splitByLengths(
                Array<string>(16).fill("1").join(""),
                [4, 4, 4, 4],
              ).join(" ")}
            </span>
          </>

          <>
            <span>نام صاحب کارت</span>
            <span>آرش نظری</span>
          </>

          <>
            <span>مبلغ انتقال</span>
            <span className="flex items-center gap-2">
              {formatPrice(15_000_000, { style: undefined })}
              <span className="text-neutral-gray-3">ریال</span>
            </span>
          </>

          <>
            <span>شرح مبدا</span>
            <span></span>
          </>

          <>
            <span>شرح مقصد</span>
            <span>بابت بدهی</span>
          </>
          <Button
            className="mt-8 w-[160px] justify-self-start text-center"
            asChild
          >
            <Link href="/payment/transfer/receipt">تایید پرداخت</Link>
          </Button>
        </div>

        <div className="relative flex w-[336px] flex-col gap-6 overflow-hidden rounded-2xl bg-primary-50 px-4 py-6 text-caption-2">
          <DollarSendCircle_Outline className="absolute start-[50px] top-0 size-[540px] text-primary-100/50" />

          <p className="relative leading-[160%] text-primary-600">
            به منظور استفاده بهینه و امن از خدمات کارت به کارت، لطفاً شرایط و
            مقررات زیر را به دقت مطالعه نمایید:
          </p>

          <p className="relative leading-[160%] text-primary-800">
            چک کردن مجدد اطلاعات در حین انجام کارت به کارت بانکی از اهمیت بسیاری
            برخوردار است. این اقدام ساده می‌تواند از وقوع اشتباهات غیرقابل جبران
            جلوگیری کند.{" "}
          </p>

          <p className="relative leading-[160%] text-primary-800">
            محدودیت‌های تراکنش: برای جلوگیری از سوءاستفاده، ممکن است
            محدودیت‌هایی برای حداکثر مبلغ انتقال و یا تعداد تراکنش‌ها در روز
            تعیین شود. لطفاً از شرایط مخصوص هر خدمت آگاهی حاصل نمایید.
          </p>

          <p className="relative leading-[160%] text-primary-800">
            شرایط و ضوابط دیگر: خدمات کارت به کارت ممکن است شرایط و ضوابط خاصی
            داشته باشد که به منظور استفاده بهینه از خدمات، لازم است آنها را
            رعایت نمایید.
          </p>

          <p className="relative rounded-lg bg-state-success-2 p-2 leading-[160%] text-state-success-1">
            با تشکر از استفاده شما از خدمات کارت به کارت ما. لطفاً برای اطلاعات
            بیشتر و یا هرگونه سوال، با مرکز خدمات مشتریان تماس حاصل نمایید.
          </p>
        </div>
      </div>
    </>
  );
}
