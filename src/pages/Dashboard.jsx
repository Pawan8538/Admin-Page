export default function Dashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-800 mb-6">Dashboard Summary</h1>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { name: 'Total Patients', stat: '2,490' },
          { name: 'Pending Lab Results', stat: '14' },
          { name: 'Est. Daily Collection', stat: '₹14,000' },
          { name: 'New Appointments', stat: '32' },
        ].map((item) => (
          <div key={item.name} className="bg-white overflow-hidden shadow-sm rounded-lg border border-slate-200">
            <div className="px-4 py-5 sm:p-6">
              <dt className="text-sm font-medium text-slate-500 truncate">{item.name}</dt>
              <dd className="mt-1 text-3xl font-semibold text-slate-900">{item.stat}</dd>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 flex items-center justify-center h-64 border-2 border-dashed border-slate-300 rounded-lg text-slate-500 bg-slate-50">
        Placeholder for Recent Appointments Table
      </div>
    </div>
  );
}
