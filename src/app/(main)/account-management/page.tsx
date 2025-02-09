import { MoneyBills_Outline } from "@/components/atoms/icons/Money&Payment/MoneyBills";
import PageTitle from "@/components/molecules/PageTitle";

export default function AccountManagementPage() {
  return (
    <>
      <PageTitle icon={<MoneyBills_Outline />} label="مدیریت حساب" />
    </>
  );
}
