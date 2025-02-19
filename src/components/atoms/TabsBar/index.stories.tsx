import type { Meta, StoryObj } from "@/types/storybook";
import { getLastIndex } from "@/utils/utils";
import range from "lodash/range";
import { TabsBar, TabsBarButton, TabsBarContent, TabsBarList } from ".";
import { Bank_Outline } from "../icons/Buildings/Bank";

const meta = {
  component: TabsBar,
  subcomponents: { TabsBarButton, TabsBarContent, TabsBarList },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Story = {
  render() {
    const tabs = range(1, 4).map((tab) => ({
      label: `عنوان تب باتن ${tab}`,
      value: `tab_${tab}`,
      content: `محتوا تب ${tab}`,
      icon: <Bank_Outline />,
    }));
    return (
      <TabsBar defaultValue={tabs[0].value}>
        <TabsBarList>
          {tabs.map(({ label, icon, value }, idx) => (
            <TabsBarButton
              value={value}
              key={value}
              disabled={idx === getLastIndex(tabs)}
            >
              {icon}
              {label}
            </TabsBarButton>
          ))}
        </TabsBarList>

        {tabs.map(({ content, value }) => (
          <TabsBarContent
            key={value}
            value={value}
            className="flex min-h-[300px] items-center justify-center rounded bg-neutral-gray-11"
          >
            {content}
          </TabsBarContent>
        ))}
      </TabsBar>
    );
  },
} satisfies Story;
