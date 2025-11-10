import React from 'react'

const DonationTable = ({ donations }) => (
  <div className="card overflow-x-auto">
    <h2 className="text-xl font-semibold mb-4 text-indigo-700">Donation Details</h2>
    <table className="w-full text-left border-collapse">
      <thead>
        <tr className="bg-indigo-100 text-indigo-800">
          <th className="p-3 rounded-tl-lg">Donor Name</th>
          <th className="p-3">Amount (₹)</th>
          <th className="p-3 rounded-tr-lg">Date</th>
        </tr>
      </thead>
      <tbody>
        {donations.map((d, i) => (
          <tr key={i} className="border-b hover:bg-indigo-50 transition-all duration-200">
            <td className="p-3 font-medium">{d.name}</td>
            <td className="p-3">₹{Number(d.amount).toLocaleString()}</td>
            <td className="p-3 text-gray-600 dark:text-gray-300">{d.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

export default DonationTable
