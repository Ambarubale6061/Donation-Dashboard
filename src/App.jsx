import React, { useState, useEffect } from "react";
import { donations as initialData } from "./data";
import SummaryCards from "./components/SummaryCards";
import DonationChart from "./components/DonationChart";
import DonationTable from "./components/DonationTable";
import DonationForm from "./components/DonationForm";

const STORAGE_KEY = "donationData";

export default function App() {
  const [donations, setDonations] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      setDonations(JSON.parse(saved));
    } else {
      setDonations(initialData);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(initialData));
    }

    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDark(prefersDark);
  }, []);

  useEffect(() => {
    if (donations.length >= 0)
      localStorage.setItem(STORAGE_KEY, JSON.stringify(donations));
  }, [donations]);

  const filteredDonations = donations.filter((d) => {
    if (!startDate && !endDate) return true;
    const date = new Date(d.date + "T00:00:00");
    return (
      (!startDate || date >= new Date(startDate)) &&
      (!endDate || date <= new Date(endDate))
    );
  });

  const total = filteredDonations.reduce((s, d) => s + Number(d.amount), 0);
  const donors = filteredDonations.length;

  const handleAddDonation = (newDonation) => {
    setDonations((prev) => [...prev, newDonation]);
  };

  const handleClearData = () => {
    if (window.confirm("Are you sure you want to reset all data?")) {
      localStorage.removeItem(STORAGE_KEY);
      setDonations(initialData);
    }
  };

  return (
    <div className={dark ? "dark" : ""}>
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-800 dark:text-gray-100 p-6 transition-all duration-500">
        {/* Header */}
        <header className="mb-10 text-center">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent tracking-tight drop-shadow-sm">
            Donation Tracking Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mt-3 text-lg italic">
            Empowering impact through transparency 💙
          </p>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={() => setDark((d) => !d)}
              className="px-5 py-2 rounded-lg font-semibold bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700 text-white shadow-md transition-all"
            >
              Toggle Theme
            </button>
            <button
              onClick={handleClearData}
              className="px-5 py-2 rounded-lg font-semibold bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white shadow-md transition-all"
            >
              Reset Data
            </button>
          </div>
        </header>

        {/* Content */}
        <div className="max-w-6xl mx-auto space-y-8">
          <SummaryCards total={total} donors={donors} />
          <DonationForm onAddDonation={handleAddDonation} />

          {/* Filters */}
          <div className="card mb-6 flex flex-col sm:flex-row gap-4 items-center justify-between bg-white/70 dark:bg-gray-800/60 p-4 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex gap-4 w-full sm:w-auto">
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="border rounded-md p-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="border rounded-md p-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>
            <button
              onClick={() => {
                setStartDate("");
                setEndDate("");
              }}
              className="px-4 py-2 rounded-md bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-semibold hover:from-sky-600 hover:to-cyan-600 transition-all"
            >
              Clear Filter
            </button>
          </div>

          <DonationChart donations={filteredDonations} />
          <DonationTable donations={filteredDonations} />
        </div>
      </div>
    </div>
  );
}
