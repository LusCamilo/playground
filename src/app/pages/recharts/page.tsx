import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  BarChart,
  Tooltip,
  Legend,
  Bar,
} from "recharts";

function Recharts() {
  const data = [
    { name: "Page A", uv: 700, pv: 2400, amt: 300 },
    { name: "Page B", uv: 500, pv: 2400, amt: 2400 },
    { name: "Page C", uv: 600, pv: 400, amt: 2400 },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen  p-6">
      <h1 className="text-4xl font-bold mb-8 text-white">Recharts</h1>

      <div className="flex justify-center items-center flex-col bg-white shadow-lg rounded-lg p-6 mb-8 w-1/2">
        <h2 className="text-xl font-semibold text-center text-blue-600 mb-4">
          Line Chart
        </h2>
        <LineChart width={600} height={300} data={data}>
          <Line type="monotone" dataKey="uv" stroke="#8884d8" strokeWidth={2} />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
        </LineChart>
      </div>

      <div className="flex flex-col justify-center items-center bg-white shadow-lg rounded-lg p-6 w-1/2">
        <h2 className="text-xl font-semibold text-center text-blue-600 mb-4">
          Bar Chart
        </h2>
        <BarChart width={600} height={300} data={data}>
          <XAxis dataKey="name" stroke="#8884d8" />
          <YAxis />
          <Tooltip
            wrapperStyle={{
              width: 120,
              backgroundColor: "#f0f0f0",
              borderRadius: 4,
              padding: "0.5rem",
            }}
          />
          <Legend
            width={120}
            wrapperStyle={{
              top: 40,
              right: 20,
              backgroundColor: "#f5f5f5",
              border: "1px solid #d5d5d5",
              borderRadius: 3,
              lineHeight: "40px",
            }}
          />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Bar dataKey="uv" fill="#8884d8" barSize={40} />
        </BarChart>
      </div>
    </div>
  );
}

export default Recharts;
