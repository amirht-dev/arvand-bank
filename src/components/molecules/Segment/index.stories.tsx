import IconButton from "@/components/atoms/buttons/IconButton";
import { FileExport_Outline } from "@/components/atoms/icons/Files/FileExport";
import { PlusSquare_Outline } from "@/components/atoms/icons/general/PlusSquare";
import { CreditCartEdit_Outline } from "@/components/atoms/icons/Money&Payment/CreditCartEdit";
import type { Meta, StoryObj } from "@/types/storybook";
import { T } from "@/utils/storybook";
import Segment from ".";
import type { SegmentProps } from "./index.types";

const meta = {
  component: Segment,
  argTypes: {
    title: {
      control: "text",
    },
    children: {
      control: false,
      table: {
        type: {
          summary: T.react.ReactNode,
        },
      },
    },
    actions: {
      control: false,
      table: {
        type: {
          summary: T.arrayOf(T.react.ReactNode),
        },
      },
    },
  },
} satisfies Meta<SegmentProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Title = {
  args: {
    title: "عنوان",
    children: <div className="h-[300px] rounded bg-neutral-gray-10" />,
  },
} satisfies Story;

export const WithActions = {
  args: {
    ...Title.args,
    actions: [
      <IconButton key="add-new-card">
        <PlusSquare_Outline className="size-6" />
      </IconButton>,
      <IconButton key="edit-card">
        <CreditCartEdit_Outline className="size-6" />
      </IconButton>,
      <IconButton key="export">
        <FileExport_Outline className="size-6" />
      </IconButton>,
    ],
  },
} satisfies Story;
