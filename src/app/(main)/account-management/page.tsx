import IconButton from "@/components/atoms/buttons/IconButton";
import { FileExport_Outline } from "@/components/atoms/icons/Files/FileExport";
import { PlusSquare_Outline } from "@/components/atoms/icons/general/PlusSquare";
import { CreditCartEdit_Outline } from "@/components/atoms/icons/Money&Payment/CreditCartEdit";
import { MoneyBills_Outline } from "@/components/atoms/icons/Money&Payment/MoneyBills";
import Card from "@/components/molecules/Card";
import { PageTitle, PageTitleIcon } from "@/components/molecules/PageTitle";
import Segment from "@/components/molecules/Segment";
import TransactionsTable from "@/components/molecules/TransactionsTable";
import ActivitySummery from "@/components/organisms/ActivitySummery";

export default function AccountManagementPage() {
  return (
    <>
      <PageTitle>
        <PageTitleIcon>
          <MoneyBills_Outline />
        </PageTitleIcon>

        <span>مدیریت حساب</span>
      </PageTitle>

      <div className="mt-8 grid gap-10">
        <Deposit />
        <ActivitySummery />
        <Transactions />
      </div>
    </>
  );
}

function Deposit() {
  return (
    <Segment
      title="سپرده"
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

function Transactions() {
  return (
    <Segment title="تراکنش ها">
      <TransactionsTable />
    </Segment>
  );
}
