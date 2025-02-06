import type { Meta, StoryObj } from "@/types/storybook";
import { T } from "@/utils/storybook";
import { Toggler, TogglerInvisible, TogglerTrigger, TogglerVisible } from ".";
import type { TogglerProps } from "./index.types";

type Props = TogglerProps & {
  "data-state": "visible" | "invisible";
};

const meta = {
  component: Toggler,
  subcomponents: { Toggler, TogglerTrigger, TogglerVisible, TogglerInvisible },
  args: {
    defaultVisible: true,
  },
  argTypes: {
    defaultVisible: {
      control: "boolean",
      table: {
        type: {
          summary: T.primitive.boolean,
        },
      },
    },
    "data-state": {
      control: false,
      table: {
        type: {
          summary: T.union("visible", "invisible"),
        },
      },
    },
  },
} satisfies Meta<Props>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Story = {
  render() {
    return (
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <Toggler>
          <TogglerTrigger
            style={{
              backgroundColor: "skyblue",
              borderRadius: "8px",
              padding: "8px 16px",
              color: "white",
            }}
          >
            <TogglerVisible>visible</TogglerVisible>
            <TogglerInvisible>invisible</TogglerInvisible>
          </TogglerTrigger>

          <TogglerVisible>1000</TogglerVisible>
          <TogglerInvisible>****</TogglerInvisible>
        </Toggler>
      </div>
    );
  },
} satisfies Story;
