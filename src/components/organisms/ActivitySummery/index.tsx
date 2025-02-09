"use client";

import Segment from "@/components/molecules/Segment";
import clsx from "clsx";
import { MouseEventHandler, useState } from "react";
import {
  Label,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ArrayValues } from "type-fest";

const data = [
  { month: "فروردین", deposit: 27384652, withdraw: 15846295 },
  { month: "اردیبهشت", deposit: 38572914, withdraw: 21287463 },
  { month: "خرداد", deposit: 49821647, withdraw: 28619537 },
  { month: "تیر", deposit: 31548723, withdraw: 17452894 },
  { month: "مرداد", deposit: 57293841, withdraw: 31298476 },
  { month: "شهریور", deposit: 42917835, withdraw: 23841597 },
  { month: "مهر", deposit: 61928473, withdraw: 34129847 },
  { month: "آبان", deposit: 35487219, withdraw: 18479238 },
  { month: "آذر", deposit: 51293847, withdraw: 27631984 },
  { month: "دی", deposit: 67289134, withdraw: 39812753 },
  { month: "بهمن", deposit: 43821654, withdraw: 24981735 },
  { month: "اسفند", deposit: 58392176, withdraw: 32741958 },
];

function LegendItem({
  label,
  color = "black",
  visible = true,
  onClick,
}: {
  label: string;
  color: string;
  visible?: boolean;
  onClick?: MouseEventHandler;
}) {
  return (
    <div
      className={clsx(
        "flex cursor-pointer items-center gap-2",
        !visible && "opacity-40 grayscale",
      )}
      onClick={onClick}
    >
      <span className="text-caption-1 text-neutral-gray-1">{label}</span>
      <svg
        width="45"
        height="4"
        viewBox="0 0 45 4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.5 2H42.5"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

function ActivitySummery() {
  const [depositVisible, setDepositVisible] = useState(true);
  const [withdrawVisible, setWithdrawVisible] = useState(true);
  return (
    <Segment
      title="خلاصه فعالیت"
      actions={[
        <LegendItem
          key="deposit"
          label="واریز"
          color="hsl(var(--color-primary-600-hsl))"
          visible={depositVisible}
          onClick={() => setDepositVisible((p) => !p)}
        />,
        <LegendItem
          key="withdraw"
          label="برداشت"
          color="hsl(var(--color-state-chart-hsl))"
          visible={withdrawVisible}
          onClick={() => setWithdrawVisible((p) => !p)}
        />,
      ]}
    >
      <div dir="ltr">
        <ResponsiveContainer height={350}>
          <LineChart data={data} margin={{ top: 40, right: 10 }}>
            <XAxis
              tickLine={false}
              dataKey={"month" satisfies keyof ArrayValues<typeof data>}
              stroke="hsl(var(--color-neutral-gray-3-hsl))"
              tick={{
                fontSize: "var(--text-caption-1-fs)",
                fontWeight: "var(--text-caption-1-fw)",
              }}
            />
            <YAxis
              tickLine={false}
              stroke="hsl(var(--color-neutral-gray-3-hsl))"
              tickFormatter={(value) => (value / 1_000_000).toString()}
              tick={{
                fontSize: "var(--text-caption-1-fs)",
                fontWeight: "var(--text-caption-1-fw)",
              }}
            >
              <Label
                value="میلیون ریال"
                position="top"
                offset={24}
                content={(props) => {
                  console.log(props);
                  return (
                    <text
                      textAnchor="middle"
                      className="fill-neutral-gray-1"
                      x={
                        props.viewBox && "x" in props.viewBox
                          ? props.viewBox.x! + (props.viewBox.width ?? 0)
                          : undefined
                      }
                      y={
                        props.viewBox && "y" in props.viewBox
                          ? props.viewBox.y! - 24
                          : undefined
                      }
                    >
                      {props.value}
                    </text>
                  );
                }}
              />
            </YAxis>
            <Tooltip />
            <Line
              dataKey={"deposit" satisfies keyof ArrayValues<typeof data>}
              stroke="hsl(var(--color-primary-600-hsl))"
              strokeWidth={5}
              dot={false}
              id="deposit"
              hide={!depositVisible}
              onClick={() => setDepositVisible((p) => !p)}
            />
            <Line
              dataKey={"withdraw" satisfies keyof ArrayValues<typeof data>}
              stroke="hsl(var(--color-state-chart-hsl))"
              strokeWidth={5}
              dot={false}
              id="withdraw"
              hide={!withdrawVisible}
              onClick={() => setWithdrawVisible((p) => !p)}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Segment>
  );
}

export default ActivitySummery;
