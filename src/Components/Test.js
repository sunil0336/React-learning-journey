import React, { useEffect } from "react";

const Test = ({ name, age, isActive }) => {
  // Manual prop validation logic
  useEffect(() => {
    if (typeof name !== "string") {
      alert("Invalid prop: 'name' should be a string");
    }
    if (age !== undefined && typeof age !== "number") {
      alert("Invalid prop: 'age' should be a number");
    }
    if (isActive !== undefined && typeof isActive !== "boolean") {
      alert("Invalid prop: 'isActive' should be a boolean");
    }
  }, [name, age, isActive]);

  return (
    <div className="p-4 border rounded shadow w-64">
      <h2 className="text-xl font-semibold">{name || "No Name Provided"}</h2>
      <p className="text-gray-600">Age: {age || "N/A"}</p>
      <p className={`mt-2 ${isActive ? "text-green-600" : "text-red-600"}`}>
        Status: {isActive ? "Active" : "Inactive"}
      </p>
    </div>
  );
};

export default Test;
