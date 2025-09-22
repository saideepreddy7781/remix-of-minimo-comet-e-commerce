"use client";

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  TooltipProps,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

// Custom tooltip content
function ChartTooltipContent({
  active,
  payload,
  className,
  indicator = "dot",
  hideLabel = false,
}: TooltipProps<number, string> & {
  className?: string;
  indicator?: "dot" | "line";
  hideLabel?: boolean;
}) {
  if (!active || !payload || payload.length === 0) return null;

  return (
    <div className={className ?? "rounded-md border bg-white p-2 shadow"}>
      {!hideLabel && <p className="font-semibold mb-1">Details</p>}
      {payload.map((item, index) => (
        <div key={index} className="flex items-center gap-2 text-sm">
          {indicator === "dot" && (
            <span
              className="inline-block h-2 w-2 rounded-full"
              style={{ backgroundColor: item.color }}
            />
          )}
          <span>{item.name}:</span>
          <span className="font-medium">{item.value}</span>
        </div>
      ))}
    </div>
  );
}

// Example chart component
export default function ChartDemo() {
  const data = [
    { name: "Jan", value: 40 },
    { name: "Feb", value: 30 },
    { name: "Mar", value: 20 },
    { name: "Apr", value: 27 },
    { name: "May", value: 18 },
    { name: "Jun", value: 23 },
    { name: "Jul", value: 34 },
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip content={<ChartTooltipContent />} />
        <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  );
}
