import React from "react";

export default function RunnerForm({ addRunner }) {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && lastName) {
      addRunner({ firstName, lastName, laps: 0 });
      setFirstName("");
      setLastName("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-2 text-white">
          Voornaam
        </label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="w-full rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black placeholder-gray-600"
          style={{ backgroundColor: "#e5e8e4" }}
          placeholder="Voer voornaam in..."
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2 text-white">
          Achternaam
        </label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="w-full rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black placeholder-gray-600"
          style={{ backgroundColor: "#e5e8e4" }}
          placeholder="Voer achternaam in..."
        />
      </div>
      <button
        type="submit"
        className="w-full text-white py-2 px-4 rounded-md hover:bg-opacity-80 transition-opacity"
        style={{ backgroundColor: "#f56b5e" }}
      >
        Toevoegen aan queue
      </button>
    </form>
  );
}
