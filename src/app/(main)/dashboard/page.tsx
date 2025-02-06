import IconButton from "@/components/atoms/buttons/IconButton";
import { ChartLineUp_Outline } from "@/components/atoms/icons/Charts&Diagram/ChartLineUp";
import { FileExport_Outline } from "@/components/atoms/icons/Files/FileExport";
import { PlusSquare_Outline } from "@/components/atoms/icons/general/PlusSquare";
import { CreditCartEdit_Outline } from "@/components/atoms/icons/Money&Payment/CreditCartEdit";
import Card from "@/components/molecules/Card";
import { ComponentPropsWithoutRefWithProps } from "@/types/utils";
import { cn } from "@/utils/utils";
import { Arrayable } from "type-fest";

export default function DashboardPage() {
  return (
    <>
      <h4 className="flex items-center gap-2 text-primary-700">
        <ChartLineUp_Outline className="size-8" />
        <span className="text-heading-4">داشبورد</span>
      </h4>

      <Cards />
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
      className="mt-8"
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
