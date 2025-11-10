import React from 'react'

const SummaryCards = ({ total, donors }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
      <div className="card border-t-4 border-blue-500">
        <h3 className="text-gray-600 text-lg font-medium">Total Donations</h3>
        <p className="text-4xl font-bold text-blue-700 mt-3">₹{total.toLocaleString()}</p>
        <p className="text-sm text-gray-500 mt-1">Total amount received</p>
      </div>

      <div className="card border-t-4 border-green-500">
        <h3 className="text-gray-600 text-lg font-medium">Number of Donors</h3>
        <p className="text-4xl font-bold text-green-700 mt-3">{donors}</p>
        <p className="text-sm text-gray-500 mt-1">Unique contributors</p>
      </div>
    </div>
  )
}

export default SummaryCards
