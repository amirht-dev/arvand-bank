import { Slot } from "@radix-ui/react-slot";
import { forwardRef } from "react";
import { PageTitleProps } from "./index.types";

const PageTitle = forwardRef<HTMLHeadingElement, PageTitleProps>(
  ({ icon, label }, ref) => {
    return (
      <h4 ref={ref} className="flex items-center gap-2 text-primary-700">
        <Slot className="size-8">{icon}</Slot>
        <span className="text-heading-4">{label}</span>
      </h4>
    );
  },
);
PageTitle.displayName = "PageTitle";

export default PageTitle;
