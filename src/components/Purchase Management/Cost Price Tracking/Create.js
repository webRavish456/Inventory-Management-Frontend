"use client";
import React, { useState } from "react";

export default function Create() {
  const [form, setForm] = useState({
    itemName: "",
    supplier: "",
    costPrice: "",
    date: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Cost Price Entry:", form);
    alert("Cost Price Entry Captured!");
    setForm({ itemName: "", supplier: "", costPrice: "", date: "" });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-2xl shadow-md w-96"
      >
        <h2 className="text-xl font-bold mb-4">Add Cost Price</h2>

        <input
          type="text"
          name="itemName"
          value={form.itemName}
          onChange={handleChange}
          placeholder="Item Name"
          className="w-full p-2 border rounded mb-3"
          required
        />

        <input
          type="text"
          name="supplier"
          value={form.supplier}
          onChange={handleChange}
          placeholder="Supplier Name"
          className="w-full p-2 border rounded mb-3"
          required
        />

        <input
          type="number"
          name="costPrice"
          value={form.costPrice}
          onChange={handleChange}
          placeholder="Cost Price"
          className="w-full p-2 border rounded mb-3"
          required
        />

        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-4"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Save
        </button>
      </form>
    </div>
  );
}


