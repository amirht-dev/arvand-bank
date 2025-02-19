import {
  Breadcrumb,
  BreadcrumbIcon,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/atoms/Breadcrumb";
import { ChartLineUp_Outline } from "@/components/atoms/icons/Charts&Diagram/ChartLineUp";
import { PapersText_Outline } from "@/components/atoms/icons/Documents/PapersText";
import { CoinCardTransfer_Outline } from "@/components/atoms/icons/Money&Payment/CoinCardTransfer";
import { PageTitle, PageTitleIcon } from "@/components/molecules/PageTitle";

export default function PaymentBillingServices() {
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
            <BreadcrumbPage>
              <BreadcrumbIcon>
                <PapersText_Outline />
              </BreadcrumbIcon>
              خدمات قبوض
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <PageTitle className="mt-4">
        <PageTitleIcon>
          <PapersText_Outline />
        </PageTitleIcon>
        <span>خدمات قبوض</span>
      </PageTitle>
    </>
  );
}
