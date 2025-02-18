import {
  Breadcrumb,
  BreadcrumbIcon,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/atoms/Breadcrumb";
import Divider from "@/components/atoms/Divider";
import { ClipboardListCheck_Outline } from "@/components/atoms/icons/Documents/ClipboardListCheck";
import { CoinCardTransfer_Outline } from "@/components/atoms/icons/Money&Payment/CoinCardTransfer";
import { CreditCartChange_Outline } from "@/components/atoms/icons/Money&Payment/CreditCartChange";
import { PageTitle, PageTitleIcon } from "@/components/molecules/PageTitle";
import { Receipt, ReceiptItem } from "@/components/molecules/Receipt";
import { operator } from "@/constants";
import { formatCardNumber, formatPrice, isOperator } from "@/utils/utils";
import Image from "next/image";

export default function PaymentTransferReceipt() {
  const receipt = {
    date: new Date(),
    price: 15_000_000,
    sender: "علی محمدی",
    originCard: 1234_1234_1234_1234,
    recipient: "آرش نظری",
    destinationCard: 1234_1234_1234_1234,
    destinationBank: "mellat",
    trackingNumber: 123456789,
  };

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

      <Receipt>
        <ReceiptItem label="تاریخ و زمان">
          {receipt.date.toLocaleDateString("fa-IR")}
        </ReceiptItem>

        <ReceiptItem label="مبلغ">
          {formatPrice(receipt.price, { style: undefined })} ریال
        </ReceiptItem>

        <ReceiptItem label="انتقال دهنده">{receipt.sender}</ReceiptItem>

        <ReceiptItem label="کارت مبدا">
          {formatCardNumber(receipt.originCard)}
        </ReceiptItem>

        <ReceiptItem label="دریافت کننده">{receipt.recipient}</ReceiptItem>

        <ReceiptItem label="کارت مقصد">
          {formatCardNumber(receipt.destinationCard)}
        </ReceiptItem>

        <ReceiptItem label="بانک مقصد">
          {isOperator(receipt.destinationBank) && (
            <span className="flex items-center gap-2">
              <Image
                src={operator[receipt.destinationBank].imageSrc}
                alt={receipt.destinationBank}
                width={20}
                height={20}
              />
              <span>{operator[receipt.destinationBank].persian}</span>
            </span>
          )}
        </ReceiptItem>

        <Divider dashed className="col-span-2" />

        <ReceiptItem label="شماره پیگیری">{receipt.trackingNumber}</ReceiptItem>
      </Receipt>
    </>
  );
}
