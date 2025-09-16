"use client";
import React, { useState } from "react";

export default function Delete() {
  const [id, setId] = useState("");

  const handleDelete = (e) => {
    e.preventDefault();
    console.log("Delete entry with ID:", id);
    alert("Entry marked for deletion: " + id);
    setId("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleDelete}
        className="bg-white p-6 rounded-2xl shadow-md w-96"
      >
        <h2 className="text-xl font-bold mb-4">Delete Cost Price Entry</h2>

        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="Enter Entry ID"
          className="w-full p-2 border rounded mb-4"
          required
        />

        <button
          type="submit"
          className="w-full bg-red-600 text-white p-2 rounded hover:bg-red-700"
        >
          Delete
        </button>
      </form>
    </div>
  );
}
