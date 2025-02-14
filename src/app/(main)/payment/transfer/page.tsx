import {
  Breadcrumb,
  BreadcrumbIcon,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/atoms/Breadcrumb";
import Button from "@/components/atoms/buttons/Button";
import IconButton from "@/components/atoms/buttons/IconButton";
import { MessageTextPlus_Outline } from "@/components/atoms/icons/Messaging/MessageTextPlus";
import { CoinCardTransfer_Outline } from "@/components/atoms/icons/Money&Payment/CoinCardTransfer";
import { CreditCart_Outline } from "@/components/atoms/icons/Money&Payment/CreditCart";
import { CreditCartChange_Outline } from "@/components/atoms/icons/Money&Payment/CreditCartChange";
import { DollarSendCircle_Outline } from "@/components/atoms/icons/Money&Payment/DollarSendCircle";
import { InfoCircle_Outline } from "@/components/atoms/icons/Sign&Controls/InfoCircle";
import {
  Input,
  InputContainer,
  InputDescription,
  InputElement,
} from "@/components/atoms/inputs/Input";
import {
  InputSlotItem,
  InputSlots,
  InputSlotsSeparator,
} from "@/components/atoms/inputs/InputSlots";
import Label from "@/components/atoms/Label";
import { Switch } from "@/components/atoms/Switch";
import Numpad from "@/components/molecules/Numpad";
import { PageTitle, PageTitleIcon } from "@/components/molecules/PageTitle";
import { ReactNode } from "react";

export default function PaymentTransferPage() {
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
            <BreadcrumbPage>
              <BreadcrumbIcon>
                <CreditCart_Outline />
              </BreadcrumbIcon>
              کارت
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

      <div className="flex gap-4">
        <div className="mt-8 grid flex-1 grid-cols-[1fr_auto] gap-y-6 rounded-2xl border border-neutral-gray-9 p-6">
          <Field label="کارت مبدا">
            <InputSlots value="">
              <InputSlotItem idx={0} length={4} />
              <InputSlotsSeparator />
              <InputSlotItem idx={1} length={4} />
              <InputSlotsSeparator />
              <InputSlotItem idx={2} length={4} />
              <InputSlotsSeparator />
              <InputSlotItem idx={3} length={4} />
            </InputSlots>
          </Field>

          <Field label="کد Cvv2">
            <div className="flex items-center gap-2">
              <Input size="sm" className="flex-1">
                <InputElement placeholder="رمز امنیتی" />
              </Input>

              <Numpad />
            </div>
          </Field>

          <Field label="تاریخ انقضای کارت">
            <InputSlots value="" className="gap-2">
              <InputSlotItem idx={0} length={2} placeholder="ماه" />
              <span className="text-neutral-gray-2">/</span>
              <InputSlotItem idx={1} length={2} placeholder="سال" />
            </InputSlots>
          </Field>

          <Field label="کارت مقصد">
            <div className="flex flex-col gap-2">
              <InputSlots value="" className="flex-1">
                <InputSlotItem idx={0} length={4} />
                <InputSlotsSeparator />
                <InputSlotItem idx={1} length={4} />
                <InputSlotsSeparator />
                <InputSlotItem idx={2} length={4} />
                <InputSlotsSeparator />
                <InputSlotItem idx={3} length={4} />
              </InputSlots>

              <Label element={<Switch />} className="text-neutral-gray-4">
                ذخیره
              </Label>
            </div>
          </Field>

          <Field label="مبلغ انتقال">
            <InputContainer>
              <Input size="sm" className="flex-1">
                <InputElement placeholder="مبلغ واریزی" />
              </Input>

              <InputDescription>۱ میلیون و ۵۰۰ هزار تومان</InputDescription>
            </InputContainer>
          </Field>

          <Field label="شرح مبدا">
            <div className="flex items-center gap-2">
              <Input size="sm" className="flex-1">
                <InputElement placeholder="توضیحات (اختیاری)" />
              </Input>

              <IconButton>
                <InfoCircle_Outline className="size-6 text-primary-500" />
              </IconButton>
            </div>
          </Field>

          <Field label="شرح مقصد">
            <div className="flex items-center gap-2">
              <Input size="sm" className="flex-1">
                <InputElement placeholder="توضیحات (اختیاری)" />
              </Input>

              <IconButton>
                <InfoCircle_Outline className="size-6 text-primary-500" />
              </IconButton>
            </div>
          </Field>

          <Field label="رمز اینترنتی">
            <div className="flex items-center gap-2">
              <Input size="sm" className="flex-1">
                <InputElement placeholder="رمز ایستا یا پویا" />
              </Input>

              <Button variant="text" prefixIcon={<MessageTextPlus_Outline />}>
                دریافت کد
              </Button>
            </div>
          </Field>

          <Button className="mt-8 w-[160px] justify-self-start">ادامه</Button>
        </div>

        <div className="relative w-[336px] space-y-6 overflow-hidden rounded-2xl bg-primary-50 px-4 py-6 text-caption-2">
          <DollarSendCircle_Outline className="absolute start-[94px] top-[117px] size-[540px] text-primary-100/50" />

          <p className="relative leading-[160%] text-primary-600">
            به منظور استفاده بهینه و امن از خدمات کارت به کارت، لطفاً شرایط و
            مقررات زیر را به دقت مطالعه نمایید:
          </p>

          <p className="relative leading-[160%] text-primary-800">
            معرفی خدمات کارت به کارت: خدمات کارت به کارت امکان انتقال وجوه بین
            حساب‌های بانکی مختلف را فراهم می‌سازد، به شرطی که شماره کارت و شماره
            حساب صحیح وارد شود.
          </p>

          <p className="relative leading-[160%] text-primary-800">
            مسئولیت امنیتی: برای اطمینان از امنیت انتقال وجوه، لازم است که شماره
            کارت، شماره حساب، و اطلاعات دیگر مرتبط، به محرمانگی حفظ شود. ارسال
            اطلاعات از طریق شبکه‌های عمومی ممکن است به خطر امنیت اطلاعات شما
            بیافتد.
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

type FieldProps = {
  label: string;
  children: ReactNode;
};

function Field({ label, children }: FieldProps) {
  return (
    <>
      <span className="self-center text-body-2 text-neutral-gray-1 font-feature-normal">
        {label}
      </span>
      {children}
    </>
  );
}
