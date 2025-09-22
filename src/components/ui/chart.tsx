// src/components/ui/chart.tsx

import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList,
} from "recharts";

// Import the correct types from Recharts
// If you're using recharts >= 2.1, you can do:
import type { TooltipProps, NameType, ValueType } from "recharts";

// If you’re using an earlier/later version, the import path might differ.

// Sample data type — adjust to your actual data
interface DataPoint {
  name: string;
  value: number;
  // Add any other fields your data has
}

interface ChartProps {
  data: DataPoint[];
}

const CustomTooltip = ({
  active,
  payload,
  label,
}: TooltipProps<ValueType, NameType>) => {
  if (active && payload && payload.length > 0) {
    // payload[0] has .value, .payload etc
    const item = payload[0];
    return (
      <div
        style={{
          backgroundColor: "white",
          border: "1px solid #ccc",
          padding: "8px",
        }}
      >
        <p style={{ margin: 0 }}>
          <strong>{label}</strong>
        </p>
        <p style={{ margin: 0 }}>
          Value: {item.value}
        </p>
      </div>
    );
  }
  return null;
};

const CustomLabel = ({
  x,
  y,
  value,
  index,
  // If you need payload here: add it to the props
  // payload is sometimes present in LabelList / CustomizedLabelProps
  payload,
}: {
  x?: number;
  y?: number;
  value?: string | number;
  index?: number;
  payload?: any;  // or a more specific type if you know it
}) => {
  // Example: you might need payload[index] etc.
  return (
    <text
      x={x}
      y={y}
      dy={-6}
      textAnchor="middle"
      fill="#666"
      fontSize="12"
    >
      {value}
    </text>
  );
};

const MyChart: React.FC<ChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Bar dataKey="value" fill="#8884d8">
          {/* If you want labels on bars */}
          <LabelList
            dataKey="value"
            content={<CustomLabel />}
          />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default MyChart;
