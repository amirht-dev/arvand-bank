import Button from "@/components/atoms/buttons/Button";
import IconButton from "@/components/atoms/buttons/IconButton";
import { ChartLineUp_Outline } from "@/components/atoms/icons/Charts&Diagram/ChartLineUp";
import { FileExport_Outline } from "@/components/atoms/icons/Files/FileExport";
import { PlusSquare_Outline } from "@/components/atoms/icons/general/PlusSquare";
import { CreditCartEdit_Outline } from "@/components/atoms/icons/Money&Payment/CreditCartEdit";
import { MoneyBillReceive_Outline } from "@/components/atoms/icons/Money&Payment/MoneyBillReceive";
import { MoneyBillSend_Outline } from "@/components/atoms/icons/Money&Payment/MoneyBillSend";
import { Wallet_Outline } from "@/components/atoms/icons/Money&Payment/Wallet";
import {
  CircularProgress,
  CircularProgressIndicator,
  CircularProgressValue,
} from "@/components/atoms/Progress/CircularProgress";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/atoms/Tabs";
import Card from "@/components/molecules/Card";
import TransactionsTable from "@/components/molecules/TransactionsTable";
import { ComponentPropsWithoutRefWithProps } from "@/types/utils";
import { cn, formatPrice } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";
import { Arrayable } from "type-fest";

export default function DashboardPage() {
  return (
    <>
      <h4 className="flex items-center gap-2 text-primary-700">
        <ChartLineUp_Outline className="size-8" />
        <span className="text-heading-4">داشبورد</span>
      </h4>

      <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-10">
        <Cards />
        <LastTransactions />
        <LoanStatus />

        <div className="flex flex-col gap-10">
          <FunctionalSummary />

          <Banner />
        </div>
      </div>
    </>
  );
}

const Segment = ({
  title,
  actions,
  className,
  children,
  ...props
}: ComponentPropsWithoutRefWithProps<
  "div",
  {
    title: string;
    actions?: Arrayable<React.ReactNode>;
  }
>) => {
  return (
    <div
      {...props}
      className={cn(
        "space-y-6 rounded-2xl border border-neutral-gray-9 p-6",
        className,
      )}
    >
      <div className="flex items-center justify-between">
        <h5 className="text-heading-5 text-neutral-gray-1">{title}</h5>

        {actions && <div className="flex gap-2">{actions}</div>}
      </div>

      {children}
    </div>
  );
};

function Cards() {
  return (
    <Segment
      className="col-span-2"
      title="کارت‌ها"
      actions={[
        <IconButton key="add-new-card">
          <PlusSquare_Outline className="size-6" />
        </IconButton>,
        <IconButton key="edit-card">
          <CreditCartEdit_Outline className="size-6" />
        </IconButton>,
        <IconButton key="export">
          <FileExport_Outline className="size-6" />
        </IconButton>,
      ]}
    >
      <Card />
    </Segment>
  );
}

function LastTransactions() {
  return (
    <Segment
      className="col-span-2"
      title="تراکنش‌های اخیر"
      actions={[
        <Button variant="text" key="button">
          مشاهده بیشتر
        </Button>,
      ]}
    >
      <TransactionsTable simple />
    </Segment>
  );
}

const HOUSING_LOAN_TAB_VALUE = "housing-loan";

const MARRIAGE_LOAN_TAB_VALUE = "marriage-loan";

const INTEREST_FREE_LOAN_TAB_VALUE = "interest-free-loan";

function LoanStatus() {
  return (
    <Segment title="وضعیت وام" className="flex flex-col">
      <Tabs defaultValue={HOUSING_LOAN_TAB_VALUE} className="gap-10">
        <TabsList>
          <TabsTrigger value={HOUSING_LOAN_TAB_VALUE}>وام مسکن</TabsTrigger>
          <TabsTrigger value={MARRIAGE_LOAN_TAB_VALUE}>وام ازدواج</TabsTrigger>
          <TabsTrigger value={INTEREST_FREE_LOAN_TAB_VALUE}>
            وام قرض الحسنه
          </TabsTrigger>
        </TabsList>

        {[
          HOUSING_LOAN_TAB_VALUE,
          MARRIAGE_LOAN_TAB_VALUE,
          INTEREST_FREE_LOAN_TAB_VALUE,
        ].map((value) => (
          <TabsContent value={value} key={value}>
            <CircularProgress className="mx-auto">
              <CircularProgressIndicator value={0.7} />
              <CircularProgressValue value={0.7} />
            </CircularProgress>

            <div className="mt-8 space-y-6">
              <div className="flex items-center justify-between text-body-4 text-neutral-gray-1">
                <span>مبلغ تسویه نشده</span>
                <span>{formatPrice(450000000)} ریال</span>
              </div>
              <div className="flex items-center justify-between text-body-4 text-neutral-gray-1">
                <span>مهلت تسویه</span>
                <span>14 روز</span>
              </div>
              <div className="flex items-center justify-between text-body-4 text-neutral-gray-1">
                <span>دفعات بازپرداخت مرحله‌ای</span>
                <span>۲ از ۳</span>
              </div>
            </div>

            <Button className="mt-8 w-full">پرداخت قسط</Button>
          </TabsContent>
        ))}
      </Tabs>
    </Segment>
  );
}

function FunctionalSummary() {
  return (
    <Segment title="خلاصه کارکرد">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-body-4 text-neutral-gray-1">
            <MoneyBillReceive_Outline className="size-6" />
            <span>واریز</span>
          </div>

          <span>{formatPrice(120000000)} ریال</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-body-4 text-neutral-gray-1">
            <MoneyBillSend_Outline className="size-6" />
            <span>واریز</span>
          </div>

          <span>{formatPrice(120000000)} ریال</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-body-4 text-neutral-gray-1">
            <Wallet_Outline className="size-6" />
            <span>واریز</span>
          </div>

          <span>{formatPrice(120000000)} ریال</span>
        </div>
      </div>
    </Segment>
  );
}

function Banner() {
  return (
    <div className="flex flex-1 items-center justify-around gap-10 rounded-2xl bg-primary-50 px-6 py-10">
      <div className="flex flex-col gap-4">
        <Image
          src="/images/dashboard-banner.png"
          alt=""
          width={233}
          height={183}
        />
        <p className="text-center text-[16px] font-bold text-primary-500">
          بانک اروند؛ امنیت مالی، آسایش فردا
        </p>
      </div>

      <div className="flex flex-col items-center gap-4">
        <span className="text-caption-1 text-neutral-black">
          دریافت مستقیم اروند همراه
        </span>

        <Link href="#">
          <Image
            src="/images/download-button-sib-app.png"
            alt="دریافت نسخه ios از سیب اپ"
            width={134}
            height={40}
          />
        </Link>
        <Link href="#">
          <Image
            src="/images/download-button-myket.png"
            alt="دریافت از مایکت"
            width={134}
            height={40}
          />
        </Link>
      </div>
    </div>
  );
}
