"use client";
import React, { useState } from "react";

export default function Edit() {
  const [form, setForm] = useState({
    id: "",
    costPrice: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Edit Entry:", form);
    alert("Entry updated for ID: " + form.id);
    setForm({ id: "", costPrice: "" });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-2xl shadow-md w-96"
      >
        <h2 className="text-xl font-bold mb-4">Edit Cost Price Entry</h2>

        <input
          type="text"
          name="id"
          value={form.id}
          onChange={handleChange}
          placeholder="Entry ID"
          className="w-full p-2 border rounded mb-3"
          required
        />

        <input
          type="number"
          name="costPrice"
          value={form.costPrice}
          onChange={handleChange}
          placeholder="New Cost Price"
          className="w-full p-2 border rounded mb-4"
          required
        />

        <button
          type="submit"
          className="w-full bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600"
        >
          Update
        </button>
      </form>
    </div>
  );
}
