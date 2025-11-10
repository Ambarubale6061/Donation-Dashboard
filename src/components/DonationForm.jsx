import React, { useState } from 'react'

const DonationForm = ({ onAddDonation }) => {
  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')
  const [date, setDate] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name || !amount || !date) return alert('Please fill all fields')
    onAddDonation({ name, amount: Number(amount), date })
    setName(''); setAmount(''); setDate('')
  }

  return (
    <div className="card mb-6">
      <h2 className="text-xl font-semibold mb-4 text-indigo-700">Add New Donation</h2>
      <form onSubmit={handleSubmit} className="grid sm:grid-cols-3 gap-4">
        <input type="text" placeholder="Donor Name" value={name} onChange={e=>setName(e.target.value)}
          className="border border-indigo-200 rounded-md p-2 w-full focus:ring-2 focus:ring-indigo-400 outline-none dark:bg-gray-800 dark:border-gray-700" />
        <input type="number" placeholder="Amount (₹)" value={amount} onChange={e=>setAmount(e.target.value)}
          className="border border-indigo-200 rounded-md p-2 w-full focus:ring-2 focus:ring-indigo-400 outline-none dark:bg-gray-800 dark:border-gray-700" />
        <input type="date" value={date} onChange={e=>setDate(e.target.value)}
          className="border border-indigo-200 rounded-md p-2 w-full focus:ring-2 focus:ring-indigo-400 outline-none dark:bg-gray-800 dark:border-gray-700" />
        <button type="submit" className="btn-primary col-span-3">Add Donation</button>
      </form>
    </div>
  )
}

export default DonationForm
