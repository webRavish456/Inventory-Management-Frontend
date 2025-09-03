"use client";
import React, { useState } from "react";

export default function View() {
  const [entries, setEntries] = useState([
    { id: 1, itemName: "Laptop", supplier: "HP", costPrice: 50000, date: "2025-08-01" },
    { id: 2, itemName: "Mouse", supplier: "Dell", costPrice: 800, date: "2025-08-05" }
  ]);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
      <h2 className="text-xl font-bold mb-4">Cost Price Entries</h2>
      <table className="table-auto bg-white shadow-md rounded-2xl overflow-hidden">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Item</th>
            <th className="px-4 py-2">Supplier</th>
            <th className="px-4 py-2">Cost Price</th>
            <th className="px-4 py-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((e) => (
            <tr key={e.id} className="text-center">
              <td className="border px-4 py-2">{e.id}</td>
              <td className="border px-4 py-2">{e.itemName}</td>
              <td className="border px-4 py-2">{e.supplier}</td>
              <td className="border px-4 py-2">{e.costPrice}</td>
              <td className="border px-4 py-2">{e.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
