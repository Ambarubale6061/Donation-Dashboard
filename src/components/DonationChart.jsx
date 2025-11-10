import React from 'react'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js'
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler)

const DonationChart = ({ donations }) => {
  const data = {
    labels: donations.map(d => d.date),
    datasets: [
      {
        label: 'Donation Amount',
        data: donations.map(d => d.amount),
        borderColor: '#6366f1',
        backgroundColor: 'rgba(99,102,241,0.28)',
        tension: 0.4,
        fill: true
      }
    ]
  }

  const options = {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: {
      y: { grid: { color: '#f3f4f6' }, ticks: { color: '#4b5563' } },
      x: { grid: { display: false }, ticks: { color: '#4b5563' } }
    }
  }

  return (
    <div className="card mb-6">
      <h2 className="text-xl font-semibold mb-4 text-indigo-700">Donation Trend</h2>
      <Line data={data} options={options} />
    </div>
  )
}

export default DonationChart
