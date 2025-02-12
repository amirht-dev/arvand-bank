import {
  Breadcrumb,
  BreadcrumbIcon,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/atoms/Breadcrumb";
import { CoinCardTransfer_Outline } from "@/components/atoms/icons/Money&Payment/CoinCardTransfer";
import { CreditCart_Outline } from "@/components/atoms/icons/Money&Payment/CreditCart";
import { CreditCartChange_Outline } from "@/components/atoms/icons/Money&Payment/CreditCartChange";
import { PageTitle, PageTitleIcon } from "@/components/molecules/PageTitle";

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
    </>
  );
}
